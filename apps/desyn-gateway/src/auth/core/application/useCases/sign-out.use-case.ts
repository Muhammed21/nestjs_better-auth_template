import { SessionMethodeRepository } from '../port/session-methode.repository';

export class SignOutUseCase {
  constructor(private readonly repository: SessionMethodeRepository) {}

  async execute(headers: HeadersInit): Promise<void> {
    return await this.repository.signOut(headers);
  }
}
