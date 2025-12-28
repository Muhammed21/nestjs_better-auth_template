import { ColorToken } from '../../domain/color.entity';
import { ColorQuery } from '../../domain/value-objects/color-query.vo';
import { ColorCreate } from '../../domain/color-create.entity';
import { ColorCreateQuery } from '../../domain/value-objects/color-create-query.vo';
import { ColorCreateMany } from '../../domain/color-create-many.entity';
import { ColorCreateManyQuery } from '../../domain/value-objects/color-create-many-query.vo';

export abstract class ColorRepository {
  /**
   * Retourne tous les tokens du design system
   */
  abstract findAll(query: ColorQuery): Promise<ColorToken[]>;
  /**
   * Créer un token du design system
   */
  abstract create(query: ColorCreateQuery): Promise<ColorCreate>;
  /**
   * Créer des token du design system
   */
  abstract createMany(
    query: ColorCreateManyQuery,
    bearerToken: string,
  ): Promise<ColorCreateMany>;
}
