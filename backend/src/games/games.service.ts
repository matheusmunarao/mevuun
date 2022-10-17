import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateGameDto } from './dto/create-game.dto';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';
import { GamesRepository } from './repository/games.repository';

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
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Game has Been Created',
    };
  }
}
