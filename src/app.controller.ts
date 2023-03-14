import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { RolesGuard } from './auth/roles.gaurd';
import { LocalAuthGuard } from './auth/local.gaurd';
import { SessionGaurd } from './auth/session.gaurd';
import { JwtAuthGuard } from './auth/jwt.gaurd';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.body);
  }
  @UseGuards(SessionGaurd)
  @Get('/session')
  verifySessionGaurd(@Request() req): string {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Get('/session')
  verifyJwtGaurd(@Request() req): string {
    return req.user;
  }
  //Get / logout
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'Logged Out.' }
  }
}
