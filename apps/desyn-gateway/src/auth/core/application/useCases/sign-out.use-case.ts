import { SessionMethodeRepository } from '../port/session-methode.repository';
import { SignOutQuery } from '../../domain/value-objects/sign-out-query.vo';

export class SignOutUseCase {
  constructor(private readonly repository: SessionMethodeRepository) {}

  async execute(query: SignOutQuery): Promise<any> {
    return await this.repository.signOut(query);
  }
}
