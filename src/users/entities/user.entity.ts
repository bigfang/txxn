import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field()
  username: string;

  @Field()
  email?: string;
}
