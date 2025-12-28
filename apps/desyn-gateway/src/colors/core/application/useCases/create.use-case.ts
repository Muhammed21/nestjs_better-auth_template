import { ColorRepository } from '../port/colors.repository';
import { ColorCreateQuery } from '../../domain/value-objects/color-create-query.vo';
import { ColorCreate } from '../../domain/color-create.entity';

export class CreateUseCase {
  constructor(private readonly repository: ColorRepository) {}

  async execute(query: ColorCreateQuery): Promise<ColorCreate> {
    return await this.repository.create(query);
  }
}
