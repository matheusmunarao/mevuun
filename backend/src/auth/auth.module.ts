import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      privateKey: 'Teste',
      signOptions: { expiresIn: '7d' },
    }),
    UsersModule,
    PassportModule,
  ],
  controllers: [AuthController],
  exports: [],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
