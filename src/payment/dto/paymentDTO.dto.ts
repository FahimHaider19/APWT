import { IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsPhoneNumber, Length, Matches } from 'class-validator';

export class PaymentDTO {
  // @IsNotEmpty()
  // @IsInt()
  paymentId: number;

  userId: number;
  
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  paymentMethod: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  verificationStatus: string;
  
  purchaseLogs: any;
}