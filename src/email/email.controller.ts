import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.gaurd';
import { Roles } from 'src/auth/roles.decorator';
import { SessionGaurd } from 'src/auth/session.gaurd';
import { EmailDto } from './dto/email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post()
  @UseGuards(SessionGaurd/*,JwtAuthGuard*/)
  @Roles("employee")
  async sendEmail(@Body() email: EmailDto) {
    return await this.emailService.sendEmail(email);
  }
}

