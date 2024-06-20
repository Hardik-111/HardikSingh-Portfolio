// Import necessary modules and setup nodemailer
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
require('dotenv').config();



// Create transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // Use secure connection
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Handle POST requests to the /api/send endpoint
export async function POST(req) {
  try {
    // Parse JSON data from request body
    const { email, subject, message } = await req.json();

    // Validate email, subject, and message
    if (!email || !subject || !message) {
      console.log('Missing required fields.');
      throw new Error('Missing required fields.');
    }

    // Send email to your email address
    const info = await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: `Portfolio Website - ${subject}`,
      text: message,
    });

    // Send thank you response back to the user's email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Thank You for Contacting Hardik`,
      html: `
        <div style="font-family: Arial, Helvetica; font-size: 14px; font-weight: 500;">
          <p style="color: #121212">Thank you for reaching out!</p>
          <p style="color: #121212">Your message has been received and I'll get back to you as soon as possible.</p>
          <p style="color: #121212">Here's a copy of your message:</p>
          <p style="font-weight: bold; color: #121212">${message}</p>
          <p style="color: #121212">Best regards,<br/>Hardik</p>
        </div>
      `,
    });

    // Return success response
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
