import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
    primaryColor,
    secondaryColor,
    whiteColor
} from "../../../lib/colors";

export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, company, phone, message } = body;

        /* ---------------- Validation ---------------- */
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        /* ---------------- Mail Transport ---------------- */
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        });

        /* ---------------- Send Email ---------------- */
        await transporter.sendMail({
            from: `"JupiNext Contact" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
            to: [
                "parekhdhaval1998@gmail.com",
                // "deepalishrivastava921@gmail.com",
            ],
            replyTo: email,
            subject: `New Contact Request | ${name}`,
            html: `
<table width="100%" cellpadding="0" cellspacing="0"
    style="background:#F8FAFC;padding:24px;font-family:Arial,sans-serif;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0"
    style="background:${whiteColor};border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">

<!-- Header -->
<tr>
<td style="background:${primaryColor};padding:20px 24px;">
    <h2 style="margin:0;color:${whiteColor};font-size:22px;">
        New Contact Inquiry
    </h2>
    <p style="margin:4px 0 0;color:#E5E7EB;font-size:14px;">
        JupiNext Website
    </p>
</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:24px;color:#111827;font-size:14px;line-height:1.6;">

<p style="margin-top:0;">
You have received a new contact request with the following details:
</p>

<!-- Contact Info -->
<table width="100%" cellpadding="0" cellspacing="0"
    style="background:#F1F5F9;border-left:4px solid ${primaryColor};margin:20px 0;">
<tr>
<td style="padding:12px 16px;font-size:13px;color:#1F2937;">
<strong>Name:</strong> ${name}<br/>
<strong>Email:</strong> ${email}<br/>
${company ? `<strong>Company:</strong> ${company}<br/>` : ""}
${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ""}
</td>
</tr>
</table>

<!-- Message -->
<p style="margin-top:16px;">
<strong style="color:${secondaryColor};">Message:</strong>
</p>

<p style="background:#F9FAFB;padding:14px;border-radius:8px;">
${message}
</p>

<p style="margin-bottom:0;">
Please respond to this inquiry at your earliest convenience.
</p>

<div style="margin-top:16px;font-weight:700;font-size:15px;">
<span style="color:${primaryColor};">Jupi</span>
<span style="color:${secondaryColor};">Next</span>
</div>

</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#F9FAFB;padding:14px 24px;text-align:center;font-size:12px;color:#6B7280;">
This message was sent from the Contact Us form on jupinext.com
</td>
</tr>

</table>
</td>
</tr>
</table>
            `,
        });

        return NextResponse.json({
            message: "Contact request sent successfully",
        });

    } catch (error) {
        console.error("CONTACT EMAIL ERROR:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
