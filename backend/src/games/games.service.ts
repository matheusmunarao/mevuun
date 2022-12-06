import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateGameDto } from './dto/create-game.dto';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';
import { GamesRepository } from './repository/games.repository';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/games.entity';

@Injectable()
export class GamesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly gamesRepository: GamesRepository,
  ) {}

  async create(createGameDto: CreateGameDto): Promise<ResponseTypeDto> {
    const gameAlredyExits = await this.gamesRepository.findByName(
      createGameDto.name,
    );

    if (gameAlredyExits) {
      throw new BadRequestException(
        `O Jogo ${createGameDto.name} já está cadastrado`,
      );
    }

    await this.gamesRepository.create(createGameDto);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Game has Been Created',
    };
  }

  async getGames(): Promise<Game[]> {
    return this.gamesRepository.getGames();
  }

  async update(
    updateGameDto: UpdateGameDto,
    _id: string,
  ): Promise<ResponseTypeDto> {
    const gameExists = await this.gamesRepository.findById(_id);

    if (!gameExists) {
      throw new NotFoundException(`O Jogo com id ${_id} não foi encontrado`);
    }

    await this.gamesRepository.update(updateGameDto, _id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Game has been Updated',
    };
  }

  async favoriteGame(_id: string): Promise<ResponseTypeDto> {
    const game = await this.gamesRepository.findById(_id);

    if (!game) {
      throw new NotFoundException(`O Jogo com id ${_id} não foi encontrado`);
    }

    await this.gamesRepository.favoriteGame(_id, true);

    return {
      statusCode: HttpStatus.OK,
      message: 'Game has been Liked',
    };
  }

  async unlikeGame(_id: string): Promise<ResponseTypeDto> {
    const game = await this.gamesRepository.findById(_id);

    if (!game) {
      throw new NotFoundException(`O Jogo com id ${_id} não foi encontrado`);
    }

    await this.gamesRepository.favoriteGame(_id, false);

    return {
      statusCode: HttpStatus.OK,
      message: 'Game has been Unliked',
    };
  }

  async deleteGame(_id: string): Promise<ResponseTypeDto> {
    const game = await this.gamesRepository.findById(_id);

    if (!game) {
      throw new NotFoundException(`O Jogo com id ${_id} não foi encontrado`);
    }

    await this.gamesRepository.delete(_id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Game has been deleted',
    };
  }
}
