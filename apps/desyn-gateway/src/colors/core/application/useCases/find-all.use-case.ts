import { ColorRepository } from '../port/colors.repository';
import { ColorToken } from '../../domain/color.entity';
import { ColorQuery } from '../../domain/value-objects/color-query.vo';

export class FindAllUseCase {
  constructor(private readonly repository: ColorRepository) {}

  async execute(dto: ColorQuery): Promise<ColorToken[]> {
    return this.repository.findAll(dto);
  }
}
