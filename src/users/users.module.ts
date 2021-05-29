import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { PostsService } from 'src/posts/posts.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [PrismaService, UsersResolver, UsersService, PostsService],
})
export class UsersModule {}
