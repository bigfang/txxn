/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { encodeCursor, encodeNodeId, PageInfo, PaginationArgs } from 'src/common/pagination';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    return await this.prisma.post.create({ data: createPostInput });
  }

  async findAll(where?: Prisma.PostWhereInput, paginationArgs?: PaginationArgs) {
    const { offset, after, first, before, last } = paginationArgs || {};
    const totalCount = this.prisma.post.count({ where: where });

    const [skip, take] = [offset || 0, first];

    let result;
    if (take) {
      result = await this.prisma.post.findMany({
        skip: skip,
        take: take,
        where: where,
      });
    } else {
      result = await this.prisma.post.findMany({
        where: where,
      });
    }

    const nodes = result.map(value => ({ ...value, nodeId: encodeNodeId(value.id, "post") }))

    const edges = nodes.map(node => ({
      node: node,
      cursor: encodeCursor(node.id),
    }));

    const pageInfo: PageInfo = {
      startCursor: nodes.length > 0 ? encodeCursor(nodes[0].id) : undefined,
      endCursor: nodes.length > 0 ? encodeCursor(nodes.slice(-1)[0].id) : undefined,
      hasNextPage: false,
      hasPreviousPage: skip != 0,
    };

    return {
      totalCount: totalCount,
      pageInfo: pageInfo,
      edges: edges,
      nodes: nodes,
    };
  }

  async findOne(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return await this.prisma.post.findUnique({
      where: postWhereUniqueInput,
      include: { author: true },
    });
  }

  async update(updatePostInput: UpdatePostInput) {
    const { id, ...restInput } = updatePostInput;
    return await this.prisma.post.update({
      where: { id: id },
      data: restInput,
    });
  }

  async remove(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return await this.prisma.post.delete({
      where: postWhereUniqueInput,
    });
  }
}
