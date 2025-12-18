import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";
import { hashToken } from "@/lib/token-utils";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Mark this route as dynamic since it uses searchParams
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  // First, check if debug mode is on - return immediately if yes
  const debug = request.nextUrl.searchParams.get("debug");
  
  if (debug) {
    return NextResponse.json({ 
      status: "debug_mode_active",
      message: "Verification route is running!",
      url: request.url,
      hasToken: !!request.nextUrl.searchParams.get("token"),
      envCheck: {
        supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        resendKey: !!process.env.RESEND_API_KEY
      }
    });
  }
  
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token");
    const debug = searchParams.get("debug"); // Add ?debug=1 to see errors

    if (!token) {
      if (debug) {
        return NextResponse.json({ error: "No token provided" }, { status: 400 });
      }
      return NextResponse.redirect(
        new URL("/contact/verify?status=invalid", request.nextUrl.origin)
      );
    }
    
    const tokenHash = hashToken(token);
    
    // Check if Supabase is configured
    let supabase;
    try {
      supabase = getSupabaseClient();
    } catch (supabaseError: any) {
      if (debug) {
        return NextResponse.json({ 
          error: "Supabase not configured", 
          details: supabaseError.message 
        }, { status: 500 });
      }
      return NextResponse.redirect(
        new URL("/contact/verify?status=error", request.nextUrl.origin)
      );
    }

    // Fetch the submission
    const { data: submission, error: fetchError } = await supabase
      .from("contact_submissions")
      .select("*")
      .eq("token_hash", tokenHash)
      .single();

    if (fetchError) {
      if (debug) {
        return NextResponse.json({ 
          error: "Database fetch error", 
          details: fetchError 
        }, { status: 500 });
      }
      return NextResponse.redirect(
        new URL("/contact/verify?status=invalid", request.nextUrl.origin)
      );
    }

    if (!submission) {
      if (debug) {
        return NextResponse.json({ 
          error: "No submission found for token hash",
          tokenHash: tokenHash.substring(0, 10) + "..." 
        }, { status: 404 });
      }
      return NextResponse.redirect(
        new URL("/contact/verify?status=invalid", request.nextUrl.origin)
      );
    }

    // Check if already verified
    if (submission.verified_at) {
      console.log("ℹ️ Already verified at:", submission.verified_at);
      return NextResponse.redirect(
        new URL("/contact/verify?status=already", request.nextUrl.origin)
      );
    }

    // Check if expired
    const now = new Date();
    const expiresAt = new Date(submission.expires_at);
    console.log("⏰ Checking expiration - Now:", now.toISOString(), "Expires:", expiresAt.toISOString());
    
    if (now > expiresAt) {
      console.log("❌ Token expired");
      return NextResponse.redirect(
        new URL("/contact/verify?status=expired", request.nextUrl.origin)
      );
    }

    // Mark as verified
    console.log("📝 Marking as verified...");
    const { error: updateError } = await supabase
      .from("contact_submissions")
      .update({ verified_at: now.toISOString() })
      .eq("token_hash", tokenHash);

    if (updateError) {
      console.error("❌ Failed to update verification status:", updateError);
      console.error("Update error details:", JSON.stringify(updateError));
      return NextResponse.redirect(
        new URL("/contact/verify?status=error", request.nextUrl.origin)
      );
    }

    console.log("✓ Marked as verified");

    // Send the actual message to Mantaj
    console.log("📧 Sending notification email...");
    if (resend) {
      try {
        const emailResult = await resend.emails.send({
          from: "Mantaj Singh <contact@tajdata.co>",
          to: "taranpalbrar58@gmail.com",
          replyTo: submission.email,
          subject: `Contact from ${submission.name} - tajdata.co Portfolio`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
              <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="background-color: #10b981; color: white; padding: 10px 15px; border-radius: 6px; margin-bottom: 20px; text-align: center;">
                  <strong>✓ Verified Email</strong>
                </div>
                
                <h2 style="color: #4f46e5; margin-top: 0;">New Contact Form Submission</h2>
                <div style="margin-bottom: 20px;">
                  <p style="margin: 5px 0;"><strong style="color: #374151;">From:</strong> ${submission.name}</p>
                  <p style="margin: 5px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${submission.email}" style="color: #4f46e5; text-decoration: none;">${submission.email}</a></p>
                  <p style="margin: 5px 0;"><strong style="color: #374151;">Submitted:</strong> ${new Date(submission.created_at).toLocaleString()}</p>
                  <p style="margin: 5px 0;"><strong style="color: #374151;">Verified:</strong> ${now.toLocaleString()}</p>
                </div>
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #4f46e5;">
                  <p style="margin: 0 0 10px 0; color: #374151; font-weight: 600;">Message:</p>
                  <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${submission.message.replace(/\n/g, "<br>")}</p>
                </div>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 12px; margin: 0;">
                    This message was sent from your portfolio contact form at tajdata.co and has been verified.
                  </p>
                </div>
              </div>
            </div>
          `,
        });
        console.log("✓ Notification email sent:", emailResult);
      } catch (emailError) {
        console.error("❌ Failed to send notification email to Mantaj:", emailError);
        // Still redirect to success since verification worked
        // The submission is in the database and can be retrieved manually if needed
      }
    } else {
      console.log("⚠️ Resend not configured, skipping notification email");
    }

    // Success! Redirect to success page
    console.log("✅ Verification complete! Redirecting to success page");
    return NextResponse.redirect(
      new URL("/contact/verify?status=success", request.nextUrl.origin)
    );
  } catch (error: any) {
    const debug = request.nextUrl.searchParams.get("debug");
    if (debug) {
      return NextResponse.json({ 
        error: "Unexpected error", 
        details: error.message,
        stack: error.stack 
      }, { status: 500 });
    }
    return NextResponse.redirect(
      new URL("/contact/verify?status=error", request.nextUrl.origin)
    );
  }
}

