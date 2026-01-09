import { Module } from '@nestjs/common';
import { createAuth } from '../auth/infrastructure/betterAuth/auth';
import { SessionMethodeRepository } from '../auth/core/application/port/session-methode.repository';
import { SessionRepository } from '../auth/infrastructure/betterAuth/session-repository.service';
import { GetSessionUseCase } from '../auth/core/application/useCases/get-session.use-case';
import { SignOutUseCase } from '../auth/core/application/useCases/sign-out.use-case';
import { AuthController } from '../auth/presentation/auth.controller';
import { SingInUseCase } from '../auth/core/application/useCases/sing-in.use-case';
import { PrismaService } from '../../prisma/prisma.service';
import { AUTH_INSTANCE } from '../auth/infrastructure/betterAuth/auth.constant';
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
  controllers: [AuthController],
  providers: [
    {
      provide: AUTH_INSTANCE,
      useFactory: (prisma: PrismaService) => {
        return createAuth(prisma);
      },
      inject: [PrismaService],
    },
    GetSessionUseCase,
    SignOutUseCase,
    SingInUseCase,
    {
      provide: SessionMethodeRepository,
      useClass: SessionRepository,
    },
  ],
  exports: [SessionMethodeRepository, AUTH_INSTANCE],
})
export class AuthenticationModule {}
