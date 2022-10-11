import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';
import { User } from 'src/users/entities/users.entity';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDTO } from './dto/login-user.dto';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  @ApiBody({
    type: CreateUserDto,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<ResponseTypeDto> {
    return await this.authService.signup(createUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  @ApiBody({
    type: LoginDTO,
  })
  async login(@Req() req): Promise<{ token: string }> {
    return await this.authService.login(req.user);
  }
}
