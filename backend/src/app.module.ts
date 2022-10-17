import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>(
          'MONGO_DB_USER',
        )}:${configService.get<string>(
          'MONGO_DB_PASS',
        )}@cluster0.nhsyhmb.mongodb.net/mevuun?retryWrites=true&w=majority`,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    GamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
