import { IsEmail, IsInt, IsMobilePhone, IsNotEmpty, IsNumberString, Length } from "class-validator";

export class CustomerDTO {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @Length(3, 8)
  password: string;

  @IsMobilePhone()
  phone: string;

  @IsNotEmpty()
  role: string;
  filename: string;
}