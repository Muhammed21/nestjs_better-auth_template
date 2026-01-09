import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindAllQueryHttpDTO {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  limit?: number;

  @ApiPropertyOptional()
  sortBy?: string;

  @ApiPropertyOptional()
  order?: 'asc' | 'desc';
}
