import { ColorCreate } from '../../../core/domain/color-create.entity';

export class ColorCreateHttpPresenter {
  static toResponse(colorCreate: ColorCreate) {
    return {
      response: colorCreate,
    };
  }
}
