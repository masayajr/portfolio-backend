import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
@Post()
async sendMail(@Body() body: { name: string; email: string; message: string }) {
 
}
;
  }
