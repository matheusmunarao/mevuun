import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ValidacaoParametrosPipe } from 'src/lib/pipes/validacao-parametros.pipe';
import { UpdateUserDto } from './dto/update-user.dto';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<void> {
    await this.usersService.update(updateUserDto, _id);
  }
}
