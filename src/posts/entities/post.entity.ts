import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  createdAt: Date;
  updatedAt: Date;
  title: string;
  content?: string;
  isPublished: boolean;

  @Field(() => User, { description: '作者' })
  author: User;
}
