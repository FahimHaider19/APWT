import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, Length, Matches } from 'class-validator';
export class EmployeeDTO {
  @IsNotEmpty({ message: 'User ID is required' })
  @IsInt({ message: 'User ID must be a number' })
  userId: number;

  @IsNotEmpty({ message: 'Name is required' })
  @Length(3, 50, { message: 'Name must of 3 to 50 characters' })
  @Matches(/^[a-zA-Z.]*$/, { message: 'Name is not valid' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is not valid' })
  @Length(3, 50, { message: 'Email is not valid' })
  @Matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
    message: 'Email is not valid',
  })
  email: string;

  @IsNotEmpty({ message: 'Phone is required' })
  @IsPhoneNumber('BD', { message: 'Phone is not valid' })
  phone: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 100, { message: 'Password must be atleast 8 characters long' })
  @Matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  password: string;
  
  // verificationStatus: boolean;
}

export class EmployeeLoginDTO {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is not valid' })
  @Length(3, 50, { message: 'Email is not valid' })
  @Matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
    message: 'Email is not valid',
  })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 100, { message: 'Password must be atleast 8 characters long' })
  @Matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  password: string;
}
