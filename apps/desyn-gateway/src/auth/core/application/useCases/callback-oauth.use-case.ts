import { SessionMethodeRepository } from '../port/session-methode.repository';

export class CallbackOAuthUseCase {
  constructor(private readonly repository: SessionMethodeRepository) {}

  async execute(): Promise<any> {
    return await this.repository.callbackOAuth();
  }
}
