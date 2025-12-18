import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";
import { generateToken, hashToken, getTokenExpiration } from "@/lib/token-utils";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("⚠️ Supabase not configured - using direct email fallback");
      
      // Fallback: Send email directly without verification
      if (resend) {
        try {
          await resend.emails.send({
            from: "Portfolio Contact <contact@tajdata.co>",
            to: "taranpalbrar58@gmail.com",
            replyTo: email,
            subject: `Contact from ${name} - tajdata.co Portfolio (Direct)`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
                <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <div style="background-color: #f59e0b; color: white; padding: 10px 15px; border-radius: 6px; margin-bottom: 20px; text-align: center;">
                    <strong>⚠️ Direct Submission (No Verification)</strong>
                  </div>
                  
                  <h2 style="color: #4f46e5; margin-top: 0;">New Contact Form Submission</h2>
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 5px 0;"><strong style="color: #374151;">From:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
                    <p style="margin: 5px 0;"><strong style="color: #374151;">Date:</strong> ${new Date().toLocaleString()}</p>
                  </div>
                  <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #4f46e5;">
                    <p style="margin: 0 0 10px 0; color: #374151; font-weight: 600;">Message:</p>
                    <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
                  </div>
                  <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 12px; margin: 0;">
                      Sent directly without email verification (Supabase not configured)
                    </p>
                  </div>
                </div>
              </div>
            `,
          });

          return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
          );
        } catch (emailError) {
          console.error("Direct email error:", emailError);
          return NextResponse.json(
            { error: "Failed to send message. Please email directly at taranpalbrar58@gmail.com" },
            { status: 500 }
          );
        }
      }
      
      return NextResponse.json(
        { error: "Email service not configured. Please email directly at taranpalbrar58@gmail.com" },
        { status: 503 }
      );
    }

    // Generate verification token
    const token = generateToken();
    const tokenHash = hashToken(token);
    const expiresAt = getTokenExpiration();

    // Save to Supabase as pending
    try {
      const supabase = getSupabaseClient();
      
      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert({
          name,
          email,
          message,
          token_hash: tokenHash,
          expires_at: expiresAt,
        });

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        throw new Error("Failed to save submission");
      }
    } catch (dbError: any) {
      console.error("Database error:", dbError);
      
      // Check if it's a Supabase configuration error
      if (dbError.message?.includes("Supabase environment variables")) {
        return NextResponse.json(
          { error: "Email verification system is not configured. Please contact the site administrator or email directly at taranpalbrar58@gmail.com" },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to process your submission. Please try again or email directly at taranpalbrar58@gmail.com" },
        { status: 500 }
      );
    }

    // Send verification email to the sender
    if (resend) {
      try {
        const verificationUrl = `https://www.tajdata.co/contact/verify?token=${token}`;
        const messagePreview = message.length > 150 ? message.substring(0, 150) + "..." : message;

        await resend.emails.send({
          from: "Mantaj Singh <contact@tajdata.co>",
          to: email,
          subject: "Confirm your email to send your message to Mantaj",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
              <div style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.07);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #4f46e5; margin: 0; font-size: 24px;">Email Verification Required</h1>
                </div>
                
                <div style="color: #374151; line-height: 1.6; margin-bottom: 25px;">
                  <p style="margin: 0 0 15px 0;">Hi <strong>${name}</strong>,</p>
                  <p style="margin: 0 0 15px 0;">You just tried to contact <strong>Mantaj Singh</strong> via <a href="https://www.tajdata.co" style="color: #4f46e5; text-decoration: none;">tajdata.co</a>.</p>
                  <p style="margin: 0 0 15px 0;">This is just an email verification step to confirm your email address. <strong>No password is required.</strong></p>
                </div>

                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; margin-bottom: 25px;">
                  <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Message Preview:</p>
                  <p style="margin: 0; color: #1f2937; font-style: italic;">"${messagePreview.replace(/\n/g, " ")}"</p>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${verificationUrl}" style="display: inline-block; background-color: #4f46e5; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">Verify Email & Send Message</a>
                </div>

                <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-bottom: 25px;">
                  <p style="margin: 0; color: #92400e; font-size: 14px;">
                    ⏱️ <strong>This link expires in 15 minutes</strong>
                  </p>
                </div>

                <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                  <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">
                    If you didn't request this, you can safely ignore this email.
                  </p>
                  <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                    If the button doesn't work, copy and paste this link into your browser:<br>
                    <a href="${verificationUrl}" style="color: #4f46e5; word-break: break-all;">${verificationUrl}</a>
                  </p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
                <p style="margin: 0;">Sent from tajdata.co • Mantaj Singh's Portfolio</p>
              </div>
            </div>
          `,
        });

        return NextResponse.json(
          { 
            success: true, 
            message: "Please check your email to verify and complete your message submission.",
            requiresVerification: true 
          },
          { status: 200 }
        );
      } catch (emailError) {
        console.error("Resend verification email error:", emailError);
        
        // If email fails, clean up the pending submission
        try {
          const supabase = getSupabaseClient();
          await supabase
            .from("contact_submissions")
            .delete()
            .eq("token_hash", tokenHash);
        } catch (cleanupError) {
          console.error("Cleanup error:", cleanupError);
        }

        return NextResponse.json(
          { error: "Failed to send verification email. Please check your email address and try again." },
          { status: 500 }
        );
      }
    }

    // If Resend is not configured, return error
    return NextResponse.json(
      { error: "Email service not configured. Please contact the administrator." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again or email directly at taranpalbrar58@gmail.com" },
      { status: 500 }
    );
  }
}
