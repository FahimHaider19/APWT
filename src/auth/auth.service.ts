import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from 'src/employee/employee.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.employeeService.getEmployeeByEmail(email);
    const compare = await bcrypt.compare(password, user.password);
    // if(!user) user = await this.customerService.getCustomerByEmail(email, password);
    if(!user) 
      return new NotAcceptableException("Invalid Email. User not found");
    else if (user && compare) {
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
