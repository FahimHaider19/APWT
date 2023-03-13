import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { NewsModule } from './news/news.module';
import { RefundModule } from './refund/refund.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    AuthModule,
    CustomerModule,
    EmployeeModule,
    PaymentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GameModule,
    NewsModule,
    RefundModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
