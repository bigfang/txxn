import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    return await this.prisma.post.create({ data: createPostInput });
  }

  async findAll(where?: Prisma.PostWhereInput) {
    return await this.prisma.post.findMany({ where: where });
  }

  findOne(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
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
