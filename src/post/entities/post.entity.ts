import { Field, ObjectType } from '@nestjs/graphql';
import { BaseObjectType } from 'src/common/entities/base.entity';
import { Paginated } from 'src/common/pagination';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Post extends BaseObjectType {
  title: string;
  content?: string;
  isPublished: boolean;

  @Field(() => User, { description: '作者' })
  author: User;
}

@ObjectType()
export class PaginatedPost extends Paginated(Post) {}
