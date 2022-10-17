import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';

@Controller('api/v1/games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createGameDto: CreateGameDto): Promise<ResponseTypeDto> {
    return await this.gamesService.create(createGameDto);
  }
}
