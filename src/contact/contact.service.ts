import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  async sendMail({ name, email, message }: { name: string; email: string; message: string }) {
    // debug - remove after confirmation
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS EXISTS:', !!process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New message from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      return { message: 'Email sent successfully.' };
    } catch (error) {
      console.error('NODEMAILER ERROR 👉', error);
      throw error;
    }
  }
}
