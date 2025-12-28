import { ColorRepository } from '../port/colors.repository';
import { ColorCreateMany } from '../../domain/color-create-many.entity';
import { ColorCreateManyQuery } from '../../domain/value-objects/color-create-many-query.vo';

export class CreateManyUseCase {
  constructor(private readonly repository: ColorRepository) {}

  async execute(
    query: ColorCreateManyQuery,
    bearerToken: string,
  ): Promise<ColorCreateMany> {
    return this.repository.createMany(query, bearerToken);
  }
}
