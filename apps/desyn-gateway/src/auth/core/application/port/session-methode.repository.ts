import { SignInResult } from '../../domain/sign-in.entity';
import { SignInQuery } from '../../domain/value-objects/sign-in-query.vo';
import { GetSessionQuery } from '../../domain/value-objects/get-session-query.vo';
import { SignOutQuery } from '../../domain/value-objects/sign-out-query.vo';

export abstract class SessionMethodeRepository {
  /**
   * Connecte un utilisateur et crée une session
   */
  abstract signIn(query: SignInQuery): Promise<Response>;
  /**
   * Gère le callback OAuth après authentification externe
   */
  abstract callbackOAuth(): Promise<any>;
  /**
   * Retourne la session utilisateur associée au token
   */
  abstract getSession(query: GetSessionQuery): Promise<any>;
  /**
   * Déconnecte la session utilisateur
   */
  abstract signOut(query: SignOutQuery): Promise<any>;
}
