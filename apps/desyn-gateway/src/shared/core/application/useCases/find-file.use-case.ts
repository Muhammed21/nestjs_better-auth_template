import { FigmaMethodeRepository } from '../port/figma-methode.repository';
import { FindFileQuery } from '../../domain/value-objects/find-file-query.vo';
import { FindFile } from '../../domain/find-file.entity';

export class FindFileUseCase {
  constructor(private readonly repository: FigmaMethodeRepository) {}

  async execute(query: FindFileQuery, bearerToken: string): Promise<FindFile> {
    return await this.repository.findFile(query, bearerToken);
  }
}
