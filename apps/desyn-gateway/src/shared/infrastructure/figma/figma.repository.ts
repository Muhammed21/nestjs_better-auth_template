import { FigmaMethodeRepository } from '../../core/application/port/figma-methode.repository';
import { FindFileQuery } from '../../core/domain/value-objects/find-file-query.vo';
import { Injectable } from '@nestjs/common';
import { FindColorTokensQuery } from '../../core/domain/value-objects/find-color-tokens-query.vo';
import { FindFile } from '../../core/domain/find-file.entity';
import { ColorToken } from '../../../colors/core/domain/color.entity';

@Injectable()
export class FigmaRepository implements FigmaMethodeRepository {
  findFile(query: FindFileQuery, bearerToken: string): Promise<FindFile> {
    throw new Error('Not implemented yet');
  }

  findColorTokens(
    query: FindColorTokensQuery,
    bearerToken: string,
  ): Promise<ColorToken> {
    throw new Error('Not implemented yet');
  }
}
