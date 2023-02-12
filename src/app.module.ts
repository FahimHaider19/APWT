import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [EmployeeModule, PaymentModule],
  controllers: [EmployeeController, AppController],
  providers: [EmployeeService, AppService],
})
export class AppModule {}
