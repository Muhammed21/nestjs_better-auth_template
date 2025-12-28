import { FindFileQuery } from '../../domain/value-objects/find-file-query.vo';
import { FindColorTokensQuery } from '../../domain/value-objects/find-color-tokens-query.vo';
import { FindFile } from '../../domain/find-file.entity';
import { ColorToken } from '../../../../colors/core/domain/color.entity';

export abstract class FigmaMethodeRepository {
  /**
   * Récupère les informations d'un fichier Figma
   */
  abstract findFile(
    query: FindFileQuery,
    bearerToken: string,
  ): Promise<FindFile>;
  /**
   * Récupère les tokens de couleurs d'un fichier Figma
   */
  abstract findColorTokens(
    query: FindColorTokensQuery,
    bearerToken: string,
  ): Promise<ColorToken>;
}
