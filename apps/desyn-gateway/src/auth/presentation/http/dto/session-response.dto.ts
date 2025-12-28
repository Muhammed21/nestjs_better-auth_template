import { UserResponseHttpDto } from './user-response.dto';

export interface SessionResponseHttpDto {
  user: UserResponseHttpDto;
  session: {
    id: string;
    expiresAt: string;
  };
}
