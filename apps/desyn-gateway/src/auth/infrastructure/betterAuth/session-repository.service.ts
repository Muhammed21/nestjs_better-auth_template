import { Inject, Injectable } from '@nestjs/common';
import { SessionMethodeRepository } from '../../core/application/port/session-methode.repository';
import type { Auth } from './auth';
import { AUTH_INSTANCE } from './auth.constant';
import { SignInResult } from '../../core/domain/sign-in.entity';
import { SignInQuery } from '../../core/domain/value-objects/sign-in-query.vo';

@Injectable()
export class SessionRepository implements SessionMethodeRepository {
  constructor(@Inject(AUTH_INSTANCE) private readonly auth: Auth) {}

  async signIn(query: SignInQuery): Promise<SignInResult> {
    return await this.auth.api.signInSocial({
      body: {
        provider: query.provider,
      },
    });
  }

  async getSession(headers: HeadersInit): Promise<void> {
    await this.auth.api.getSession({ headers });
  }

  async signOut(headers: HeadersInit): Promise<void> {
    await this.auth.api.signOut({ headers });
  }
}
