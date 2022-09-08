import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';
import { regexHelper } from '../helpe/regex.helpe';

export class CreateUsersDto {
  @IsString()
  @MinLength(2, { message: 'No minino 2 caractere' })
  @ApiProperty()
  readonly name: string;

  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @Matches(regexHelper.password, {
    message:
      'Password must be at least 8 characters long and contain at least one number, one uppercase one lowercase letter and special character',
  })
  @ApiProperty()
  readonly password: string;
}
