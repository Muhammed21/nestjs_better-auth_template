import { Module } from '@nestjs/common';
import { createAuth } from '../auth/auth';
import { PrismaService } from '../../prisma/prisma.service';
import { AUTH_INSTANCE } from '../auth/auth.constant';
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';

@Module({
  imports: [
    PrismaModule,
    AuthModule.forRootAsync({
      imports: [PrismaModule],
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) => ({
        auth: createAuth(prisma),
      }),
    }),
  ],
  providers: [
    {
      provide: AUTH_INSTANCE,
      useFactory: (prisma: PrismaService) => {
        return createAuth(prisma);
      },
      inject: [PrismaService],
    },
  ],
  exports: [ AUTH_INSTANCE],
})
export class AuthenticationModule {}
