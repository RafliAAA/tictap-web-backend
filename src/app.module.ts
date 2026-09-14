import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { auth } from "./lib/auth";
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule.forRoot({ auth })],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
