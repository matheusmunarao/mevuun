import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { ResponseTypeDto } from 'src/lib/dto/general/response-type.dto';
import { ValidacaoParametrosPipe } from 'src/lib/pipes/validacao-parametros.pipe';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/games.entity';
import { GamesService } from './games.service';

@Controller('api/v1/games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({
    type: CreateGameDto,
  })
  async create(@Body() createGameDto: CreateGameDto): Promise<ResponseTypeDto> {
    return await this.gamesService.create(createGameDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({
    type: CreateGameDto,
  })
  async games(): Promise<Game[]> {
    return await this.gamesService.getGames();
  }

  @Put('/:_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({
    type: UpdateGameDto,
  })
  async update(
    @Body() updateGameDto: UpdateGameDto,
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<ResponseTypeDto> {
    return await this.gamesService.update(updateGameDto, _id);
  }

  @Patch('/like/:_id')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({
    type: UpdateGameDto,
  })
  async favoriteGame(
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<ResponseTypeDto> {
    return await this.gamesService.favoriteGame(_id);
  }
  @Patch('/unlike/:_id')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({
    type: UpdateGameDto,
  })
  async unlikeGame(
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<ResponseTypeDto> {
    return await this.gamesService.unlikeGame(_id);
  }

  @Delete('/:_id')
  @UseGuards(AuthGuard('jwt'))
  async delete(
    @Param('_id', ValidacaoParametrosPipe) _id: string,
  ): Promise<ResponseTypeDto> {
    return await this.gamesService.deleteGame(_id);
  }
}
