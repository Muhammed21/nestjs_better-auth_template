import { SessionMethodeRepository } from '../port/session-methode.repository';
import { Session } from '../../domain/session.entity';

export class GetSessionUseCase {
  constructor(private readonly repository: SessionMethodeRepository) {}

  async execute(headers: HeadersInit): Promise<void> {
    return await this.repository.getSession(headers);
  }
}
