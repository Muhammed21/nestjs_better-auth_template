import { Module } from '@nestjs/common';
import { ColorsModule } from './api/colors.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { FigmaModule } from './api/figma.module';
import { AuthenticationModule } from './api/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthenticationModule,
    PrismaModule,
    FigmaModule,
    ColorsModule,
  ],
})
export class AppModule {}
