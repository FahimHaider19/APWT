import { Body, Controller, Post } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post()
  async sendEmail(@Body() email: EmailDto) {
    return await this.emailService.sendEmail(email);
  }
}

