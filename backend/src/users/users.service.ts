import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { User } from './schemas/user.schema';
import { hashSync } from 'bcrypt';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new BadRequestException(`O Email ${email} já está sendo utilizado`);
    }

    const hashedPass = hashSync(createUserDto.password, 10);

    createUserDto.password = hashedPass;

    return await this.usersRepository.create(createUserDto);
  }
}
