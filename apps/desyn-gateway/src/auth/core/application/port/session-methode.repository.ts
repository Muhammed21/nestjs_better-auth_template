import { SignInResult } from '../../domain/sign-in.entity';
import { SignInQuery } from '../../domain/value-objects/sign-in-query.vo';

export abstract class SessionMethodeRepository {
  /**
   * Connecte un utilisateur et crée une session
   */
  abstract signIn(query: SignInQuery): Promise<SignInResult>;
  /**
   * Retourne la session utilisateur associée au token
   */
  abstract getSession(headers: HeadersInit): Promise<void>;
  /**
   * Déconnecte la session utilisateur
   */
  abstract signOut(headers: HeadersInit): Promise<void>;
}
