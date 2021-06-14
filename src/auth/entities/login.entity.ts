import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResult {
  id: number;
  username: string;
  access_token: string;
  refresh_token?: string;
}
