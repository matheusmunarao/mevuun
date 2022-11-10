import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';

import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from './entities/users.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseTypeDto> {
    const { email } = createUserDto;

    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new BadRequestException(`O Email ${email} já está sendo utilizado`);
    }

    await this.usersRepository.create(createUserDto);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'User has been Updated',
    };
  }

  async update(
    updateUserDto: UpdateUserDto,
    _id: string,
  ): Promise<ResponseTypeDto> {
    const userExists = await this.usersRepository.findById(_id);

    if (!userExists) {
      throw new NotFoundException(`O Usuário com id ${_id} não foi encontrado`);
    }

    await this.usersRepository.update(updateUserDto, _id);

    return {
      statusCode: HttpStatus.OK,
      message: 'User has been Updated',
    };
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findByEmail(email);
  }
}
