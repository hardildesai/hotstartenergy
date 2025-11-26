import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    console.log("📩 Contact API triggered");

    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        console.log("📦 Payload received:", { name, email, subject, messageLength: message?.length });

        // 1. Validate Input
        if (!name || !email || !message) {
            console.error("❌ Missing required fields");
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 2. Validate Env Vars
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (!emailUser || !emailPass) {
            console.error("❌ Missing Environment Variables");
            console.error("EMAIL_USER:", emailUser ? "Set" : "Missing");
            console.error("EMAIL_PASS:", emailPass ? "Set" : "Missing");
            return NextResponse.json(
                { error: 'Server configuration error: Missing email credentials' },
                { status: 500 }
            );
        }

        console.log(`🔐 Authenticating as: ${emailUser}`);

        // 3. Configure Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        // 4. Verify Connection
        try {
            await transporter.verify();
            console.log("✅ Transporter connection verified");
        } catch (verifyError) {
            console.error("❌ Transporter verification failed:", verifyError);
            return NextResponse.json(
                { error: 'Failed to connect to email server. Check credentials.' },
                { status: 500 }
            );
        }

        // 5. Send Email
        const mailOptions = {
            from: emailUser,
            to: emailUser, // Send to yourself
            replyTo: email,
            subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #555;">${message}</p>
        </div>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.messageId);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error: any) {
        console.error('❌ Error in API Route:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send email' },
            { status: 500 }
        );
    }
}
