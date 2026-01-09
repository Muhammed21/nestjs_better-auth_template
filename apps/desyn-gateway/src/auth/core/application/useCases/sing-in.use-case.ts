import { SessionMethodeRepository } from '../port/session-methode.repository';
import { SignInResult } from '../../domain/sign-in.entity';
import { SignInQuery } from '../../domain/value-objects/sign-in-query.vo';

export class SingInUseCase {
  constructor(private readonly repository: SessionMethodeRepository) {}

  async execute(query: SignInQuery): Promise<Response> {
    return await this.repository.signIn(query);
  }
}
