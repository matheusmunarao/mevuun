import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { compareSync } from 'bcrypt';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<ResponseTypeDto> {
    await this.userService.create(createUserDto);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'User has been Created',
    };
  }

  async login(user) {
    const payload = { sub: user._id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return null;
    }

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) {
      return null;
    }
    return user;
  }
}
