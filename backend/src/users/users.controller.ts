import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ValidacaoParametrosPipe } from 'src/lib/pipes/validacao-parametros.pipe';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('/:_id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @ApiBody({
    type: UpdateUserDto,
  })
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<void> {
    await this.usersService.update(updateUserDto, _id);
  }

  @Get('/:_id')
  @UsePipes(ValidationPipe)
  async getUser(
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<User> {
    return await this.usersService.findById(_id);
  }
}
