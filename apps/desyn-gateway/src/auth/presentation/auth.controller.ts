import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import { SessionMethodeRepository } from '../core/application/port/session-methode.repository';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';
import { SignInResult } from '../core/domain/sign-in.entity';
import { SignInQueryHttpDTO } from './http/dto/signIn/sign-in-query.dto';
import { SignInQuery } from '../core/domain/value-objects/sign-in-query.vo';
import { signInSchema } from '@desyn/types';
import { ZodValidationPipe } from '../../shared/presentation/pipes/zod-validation.pipe';
import { GetSessionQuery } from '../core/domain/value-objects/get-session-query.vo';
import { SignOutQuery } from '../core/domain/value-objects/sign-out-query.vo';
import { SessionGetHttpPresenter } from './presenter/session-get-http.presenter';
import { type Response } from 'express';

@OptionalAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly repository: SessionMethodeRepository) {}

  @Post('sign-in')
  @UsePipes(new ZodValidationPipe(signInSchema))
  async signIn(
    @Body() body: SignInQueryHttpDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const domainQuery = SignInQuery.create(body.provider, req.headers);
    const result = await this.repository.signIn(domainQuery);

    res.status(result.status);

    result.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const buffer = Buffer.from(await result.arrayBuffer());
    res.send(buffer);
  }

  @Get('callback-oauth')
  async callbackOAuth(): Promise<void> {
    return await this.repository.callbackOAuth();
  }

  @Get('session')
  async getSession(@Req() req: Request): Promise<any> {
    const domainQuery = GetSessionQuery.create(req.headers);
    const session = await this.repository.getSession(domainQuery);

    return SessionGetHttpPresenter.toResponse(session);
  }

  @Post('sign-out')
  async signOut(@Req() req: Request): Promise<any> {
    const domainQuery = SignOutQuery.create(req.headers);
    return await this.repository.signOut(domainQuery);
  }
}
