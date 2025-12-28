import { ColorToken } from '../../../../core/domain/color.entity';

export interface FindAllResponseHttpDTO {
  data: ColorToken[];
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}
