import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class UpdateGameDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  image?: string;

  @ApiProperty()
  @IsBoolean()
  liked?: boolean;

  @ApiProperty()
  @IsDate()
  date_start?: Date;

  @ApiProperty()
  @IsDate()
  date_end?: Date;
}
