import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  id: number;
  username: string;
  email: string;
}
