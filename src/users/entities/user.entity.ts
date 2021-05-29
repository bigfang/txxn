import { Field, ObjectType } from '@nestjs/graphql';
import { BaseObjectType } from 'src/common/entities/base.entity';
import { Post } from 'src/posts/entities/post.entity';

@ObjectType()
export class User extends BaseObjectType {
  username: string;
  email: string;

  @Field(() => [Post], { description: '文章' })
  posts: Post[];
}
