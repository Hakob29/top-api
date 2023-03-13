import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthModel, AuthModelSchema } from './auth.model';
import { AuthService } from './auth.service';
import * as dotenv from "dotenv";
import { JwtStrategy } from './jwt.strategy';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AuthModel.name, schema: AuthModelSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY
    }),],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtModule]
})
export class AuthModule { }
