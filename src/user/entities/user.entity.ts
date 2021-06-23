import { Field, ObjectType } from '@nestjs/graphql';
import { BaseObjectType } from 'src/common/entities/base.entity';
import { PaginatedPost } from 'src/post/entities/post.entity';

@ObjectType()
export class User extends BaseObjectType {
  username: string;
  email: string;

  @Field(() => PaginatedPost, { nullable: true, description: '文章' })
  posts?: PaginatedPost;
}
