import { Inject, Injectable } from '@nestjs/common';
import { SessionMethodeRepository } from '../../core/application/port/session-methode.repository';
import type { Auth } from './auth';
import { AUTH_INSTANCE } from './auth.constant';
import { SignInResult } from '../../core/domain/sign-in.entity';
import { SignInQuery } from '../../core/domain/value-objects/sign-in-query.vo';
import { GetSessionQuery } from '../../core/domain/value-objects/get-session-query.vo';
import { SignOutQuery } from '../../core/domain/value-objects/sign-out-query.vo';
import { APIError } from 'better-auth';
import { AuthService } from '@thallesp/nestjs-better-auth';

@Injectable()
export class SessionRepository implements SessionMethodeRepository {
  constructor(
    @Inject(AUTH_INSTANCE) private readonly auth: Auth,
    private readonly authService: AuthService<typeof auth>,
  ) {}

  async signIn(query: SignInQuery): Promise<Response> {
    const headers = query.headers;
    return await this.authService.api.signInSocial({
      body: {
        provider: query.provider,
        scopes: ['file_content:read'],
        callbackURL: process.env.CLIENT_URL,
      },
      headers,
      asResponse: true,
    });
  }

  async callbackOAuth(): Promise<any> {
    try {
      return await this.auth.api.callbackOAuth({
        params: {
          id: 'figma',
        },
      });
    } catch (error) {
      if (error instanceof APIError) {
        console.log(error.message, error.status);
      }
    }
  }

  async getSession(query: GetSessionQuery): Promise<any> {
    try {
      const headers = query.headers;
      return await this.auth.api.getSession({ headers, asResponse: true });
    } catch (error) {
      if (error instanceof APIError) {
        console.log(error.message, error.status);
      }
    }
  }

  async signOut(query: SignOutQuery): Promise<any> {
    try {
      const headers = query.headers;
      return await this.auth.api.signOut({ headers, asResponse: true });
    } catch (error) {
      if (error instanceof APIError) {
        console.log(error.message, error.status);
      }
    }
  }
}
