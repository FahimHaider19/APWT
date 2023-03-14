import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { RolesGuard } from './auth/roles.gaurd';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'), RolesGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.body);
  }
}
