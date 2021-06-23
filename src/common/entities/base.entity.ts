import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class BaseObjectType {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => String, { description: 'Node ID' })
  nodeId: string;

  @Field(() => Date, { description: '创建时间' })
  createdAt: Date;

  @Field(() => Date, { description: '更新时间' })
  updatedAt: Date;
}
