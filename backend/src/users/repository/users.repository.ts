import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async update(updateUserDto: UpdateUserDto, _id: string): Promise<void> {
    this.userModel
      .findOneAndUpdate({ _id: _id }, { $set: updateUserDto })
      .exec();
  }

  async create(createUserDto: CreateUserDto): Promise<void> {
    const newUser = new this.userModel(createUserDto);

    await newUser.save();
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();

    return user;
  }

  async findById(_id: string): Promise<User> {
    const user = await this.userModel
      .findOne({ _id: _id })
      .select('_id name lastname email createdAt updatedAt')
      .exec();

    return user;
  }
}
