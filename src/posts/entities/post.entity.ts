import { Field, ObjectType } from '@nestjs/graphql';
import { BaseObjectType } from 'src/common/entities/base.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Post extends BaseObjectType {
  title: string;
  content?: string;
  isPublished: boolean;

  @Field(() => User, { description: '作者' })
  author: User;
}
