import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from '../dto/create-game.dto';
import { UpdateGameDto } from '../dto/update-game.dto';
import { Game } from '../entities/games.entity';

@Injectable()
export class GamesRepository {
  constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) {}

  async create(createGameDto: CreateGameDto): Promise<void> {
    const newGame = new this.gameModel(createGameDto);

    await newGame.save();
  }

  async getGames(): Promise<Game[]> {
    return this.gameModel.find();
  }

  async findByName(name: string): Promise<Game> {
    const game = await this.gameModel.findOne({ name }).exec();

    return game;
  }

  async findById(_id: string): Promise<Game> {
    const game = await this.gameModel.findOne({ _id }).exec();

    return game;
  }

  async update(updateGameDto: UpdateGameDto, _id: string): Promise<void> {
    this.gameModel
      .findOneAndUpdate({ _id: _id }, { $set: updateGameDto })
      .exec();
  }

  async favoriteGame(_id: string, like: boolean): Promise<void> {
    this.gameModel
      .findOneAndUpdate({ _id: _id }, { $set: { liked: like } })
      .exec();
  }
}
