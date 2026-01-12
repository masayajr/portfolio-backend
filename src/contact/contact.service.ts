import { Injectable } from '@nestjs/common';
import {Resend} from 'resend';
@Injectable()
export class ContactService {
  private resend = new Resend(process.env.RESEND_API_KEY);
  
  async sendMail({
    name,
    email,
    phone,
    message,
  }: {
    name: string;
    email: string; 
    phone: number
    message: string;
  }) {
    try {
      await this.resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.EMAIL_TO!,
        subject: `New message from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      return { message: 'Email sent successfully.', style: { color: 'green' } };
    } catch (error) {
      console.error('RESEND ERROR 👉', error);
      throw error;
    }
  }
} 