import { FigmaMethodeRepository } from '../port/figma-methode.repository';
import { FindFileQuery } from '../../domain/value-objects/find-file-query.vo';
import { ColorToken } from '../../../../colors/core/domain/color.entity';

export class FindColorTokensUseCase {
  constructor(private readonly repository: FigmaMethodeRepository) {}

  async execute(
    query: FindFileQuery,
    bearerToken: string,
  ): Promise<ColorToken> {
    return await this.repository.findColorTokens(query, bearerToken);
  }
}
