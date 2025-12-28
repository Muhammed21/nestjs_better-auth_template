import { ColorQuery } from '../../../core/domain/value-objects/color-query.vo';
import { ColorToken } from '../../../core/domain/color.entity';

export class ColorHttpPresenter {
  static toPaginatedResponse(tokens: ColorToken[], query: ColorQuery) {
    return {
      data: tokens.map((token) => token),
      pagination: {
        page: query.page,
        limit: query.limit,
        total: tokens.length,
      },
    };
  }
}
