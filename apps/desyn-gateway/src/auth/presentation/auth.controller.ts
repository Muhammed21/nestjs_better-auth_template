import {
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import type { Response } from 'express';
import { SessionMethodeRepository } from '../core/application/port/session-methode.repository';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';
import { SignInResult } from '../core/domain/sign-in.entity';
import type { SignInQueryHttpDTO } from './http/dto/signIn/sign-in-query.dto';
import { SignInQuery } from '../core/domain/value-objects/sign-in-query.vo';
import { signInSchema } from '@desyn/types';
import { ZodValidationPipe } from '../../shared/presentation/pipes/zod-validation.pipe';

@OptionalAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly repository: SessionMethodeRepository) {}

  @Get('figma')
  loginWithFigma(@Res() res: Response) {
    const figmaAuthUrl = `https://www.figma.com/oauth?client_id=${process.env.FIGMA_CLIENT_ID}&redirect_uri=${process.env.FIGMA_REDIRECT_URI}&scope=file_content:read&state=random_state&response_type=code`;

    return res.redirect(figmaAuthUrl);
  }

  @Get('callback/figma')
  figmaCallback(@Res() res: Response) {
    const clientUrl = process.env.CLIENT_URL!;

    return res.redirect(`${clientUrl}/auth/success`);
  }

  @Post('sign-in')
  @UsePipes(new ZodValidationPipe(signInSchema))
  async signIn(@Query() query: SignInQueryHttpDTO): Promise<SignInResult> {
    const domainQuery = SignInQuery.create(query.provider);
    return await this.repository.signIn(domainQuery);
  }

  @Get('session')
  async getSession(@Req() req: Request): Promise<void> {
    await this.repository.getSession(req.headers);
  }

  @Post('sign-out')
  async signOut(@Req() req: Request): Promise<void> {
    await this.repository.signOut(req.headers);
  }
}
