import type { UserSession } from '@thallesp/nestjs-better-auth';

export class SessionGetHttpPresenter {
  static toResponse(session: UserSession) {
    return {
      statusCode: 200,
      session: session,
    };
  }
}
