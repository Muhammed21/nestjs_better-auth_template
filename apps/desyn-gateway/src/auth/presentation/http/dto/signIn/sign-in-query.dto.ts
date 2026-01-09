import { ApiProperty } from '@nestjs/swagger';

export class SignInQueryHttpDTO {
  @ApiProperty()
  provider: string;
}
