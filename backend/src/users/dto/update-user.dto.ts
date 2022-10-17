import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  lastname?: string;

  @ApiProperty()
  @IsString()
  email?: string;

  @ApiProperty()
  @IsString()
  password?: string;
}
