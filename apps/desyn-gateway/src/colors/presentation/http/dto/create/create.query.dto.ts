import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQueryHttpDTO {
  @ApiProperty()
  tokenId: string;

  @ApiProperty()
  tokenPath: string;

  @ApiProperty()
  parentRelationId: string;

  @ApiPropertyOptional()
  hexValue?: string;

  @ApiPropertyOptional()
  hslValue?: string;

  @ApiPropertyOptional()
  oklchValue?: string;

  @ApiPropertyOptional()
  rgbValue?: string;
}
