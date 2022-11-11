import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { GameSchema } from './schemas/game.schema';
import { GamesRepository } from './repository/games.repository';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),
  ],
  controllers: [GamesController],
  providers: [GamesService, GamesRepository],
})
export class GamesModule {}
