import { IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsPhoneNumber, Length, Matches } from 'class-validator';

export class PaymentDTO {
  // @IsNotEmpty()
  // @IsInt()
  paymentId: number;

  userId: number;
  
  @IsNotEmpty({message:"Amount is required"})
  @IsNumber({},{message:"Amount must be a number"})
  amount: number;

  @IsNotEmpty({ message: "Amount is required" })
  paymentMethod: string;

  @IsNotEmpty({ message: "Amount is required" })
  @IsDate({message:"Date must be a date"})
  date: Date;

  verificationStatus: string;
  
  purchaseLogs: any;
}