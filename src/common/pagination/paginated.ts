import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PageInfo } from './page-info';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType(`${classRef.name}Edge`, { isAbstract: true })
  abstract class EdgeType {
    @Field(() => String)
    cursor: string;

    @Field(() => classRef)
    node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => Int)
    totalCount: number;

    @Field(() => PageInfo, { nullable: true })
    pageInfo?: PageInfo;

    @Field(() => [EdgeType], { nullable: true })
    edges?: EdgeType[];

    @Field(() => [classRef], { nullable: true })
    nodes?: T[];
  }

  return PaginatedType;
}
