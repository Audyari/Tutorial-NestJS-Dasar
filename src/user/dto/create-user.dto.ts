import { IsString, IsNumber, IsEmail, IsOptional, MinLength, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  readonly name: string;

  @IsNumber({}, { message: 'Age must be a valid number' })
  @Min(1, { message: 'Age must be at least 1' })
  @Max(150, { message: 'Age must not exceed 150' })
  readonly age: number;

  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid email address' })
  readonly email?: string;
}

