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
import { ReviewModule } from './review/review.module';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { password, user } from './email/constant.email';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'gamestore',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: user,
          pass: password,
        },
      },
    }),
    AuthModule,
    CustomerModule,
    EmployeeModule,
    PaymentModule,
    GameModule,
    NewsModule,
    ReviewModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
