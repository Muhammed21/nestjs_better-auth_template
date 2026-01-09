import { SessionMethodeRepository } from '../port/session-methode.repository';
import { GetSessionQuery } from '../../domain/value-objects/get-session-query.vo';

export class GetSessionUseCase {
  constructor(private readonly repository: SessionMethodeRepository) {}

  async execute(query: GetSessionQuery): Promise<any> {
    return await this.repository.getSession(query);
  }
}
