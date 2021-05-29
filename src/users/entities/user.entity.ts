import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  createdAt: Date;
  updatedAt: Date;
  username: string;
  email: string;

  @Field(() => [Post], { description: '文章' })
  posts: Post[];
}
