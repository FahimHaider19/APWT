import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { RolesGuard } from './auth/roles.gaurd';
import { LocalAuthGuard } from './auth/local.gaurd';
import { SessionGaurd } from './auth/session.gaurd';
import { JwtAuthGuard } from './auth/jwt.gaurd';
import { Roles } from './auth/roles.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.body);
  }
  
  @Get('/sessiongaurd')
  @UseGuards(SessionGaurd)
  verifySessionGaurd(@Request() req): string {
    return req.user;
  }

  @Get('/empgaurd')
  @Roles("employee")
  // @UseGuards(SessionGaurd)
  verifyRoleEmployeeGaurd(@Request() req): string {
    return req.user;
  }

  @Get('/customergaurd')
  @Roles("customer")
  @UseGuards(SessionGaurd)
  verifyRoleCustomerGaurd(@Request() req): string {
    return req.user;
  }

  @Get('/jwtgaurd')
  @UseGuards(JwtAuthGuard)
  verifyJwtGaurd(@Request() req): string {
    return req.user;
  }

  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'Logged Out.' }
  }
}
