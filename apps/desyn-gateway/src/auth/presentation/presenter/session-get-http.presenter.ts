import type { UserSession } from '@thallesp/nestjs-better-auth';

export class SessionGetHttpPresenter {
  static toResponse(session: UserSession, figmaUserId: string) {
    return {
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        image: session.user.image ?? '',
        figmaUserId: figmaUserId,
      },
      session: {
        id: session.session.id,
        expiresAt: session.session.expiresAt.toISOString(),
      },
    };
  }
}
