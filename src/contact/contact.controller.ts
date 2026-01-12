import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('contact')
  async sendMail(
    @Body() body: { name: string; email: string; phone: number; message: string },
  ) {
    console.log('Contact route hit!', body);
    return this.contactService.sendMail(body);
  }
}
