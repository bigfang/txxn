import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/services/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({ data: createPostInput });
  }

  findAll(where?: Prisma.PostWhereInput) {
    return this.prisma.post.findMany({ where: where });
  }

  findOne(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  update(updatePostInput: UpdatePostInput) {
    const { id, ...restInput } = updatePostInput;
    return this.prisma.post.update({
      where: { id: id },
      data: restInput,
    });
  }

  remove(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.delete({
      where: postWhereUniqueInput,
    });
  }
}
