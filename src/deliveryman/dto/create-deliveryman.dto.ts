import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  Length,
  Matches,
} from 'class-validator';

export class CreateDeliverymanDto {
  @IsNotEmpty({ message: 'First name is required' })
  @Length(2, 50, { message: 'First name must be between 2 and 50 characters' })
  firstName: string;

  @IsNotEmpty({ message: 'Last name is required' })
  @Length(2, 50, { message: 'Last name must be between 2 and 50 characters' })
  lastName: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @Matches(/^[\w._%+-]+@[\w.-]+\.com$/, {
    message: 'Email must end with .com domain',
  })
  email: string;

  @IsPhoneNumber('BD', { message: 'Invalid Bangladeshi phone number' })
  phoneNumber: string;

  @IsNotEmpty({ message: 'Date of birth is required' })
  dateOfBirth: string; // You can use Date type if you're parsing it

  @IsNotEmpty({ message: 'Password is required' })
  @Length(6, 100, { message: 'Password must be at least 6 characters' })
  password: string;
}
