import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    // Send email directly
    if (resend) {
      try {
        await resend.emails.send({
          from: "Portfolio Contact <contact@tajdata.co>",
          to: "taranpalbrar58@gmail.com",
          replyTo: email,
          subject: `Contact from ${name} - tajdata.co Portfolio`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
              <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
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
              </div>
            </div>
          `,
        });

        return NextResponse.json(
          { success: true, message: "Message sent successfully!" },
          { status: 200 }
        );
      } catch (emailError) {
        console.error("Email error:", emailError);
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
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again or email directly at taranpalbrar58@gmail.com" },
      { status: 500 }
    );
  }
}
