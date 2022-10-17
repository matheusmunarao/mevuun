import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from '../dto/create-game.dto';
import { Game } from '../entities/games.entity';

@Injectable()
export class GamesRepository {
  constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) {}

  async create(createGameDto: CreateGameDto): Promise<void> {
    const newGame = new this.gameModel(createGameDto);

    await newGame.save();
  }

  async findByName(name: string): Promise<Game> {
    const game = await this.gameModel.findOne({ name }).exec();

    return game;
  }
}
