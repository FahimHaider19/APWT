import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.employeeService.getEmployeeByEmail(email, password);
    // if(!user) user = await this.customerService.getCustomerByEmail(email, password);
    // if(!user) user = await this.adminService.getAdminByEmail(email, password);
    // if(!user) user = await this.developerService.getDeveloperByEmail(email, password);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginWithCredentials(user: any) {
    const payload = { email: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
