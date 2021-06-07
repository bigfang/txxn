import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { PostService } from 'src/post/post.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [PrismaService, UserResolver, UserService, PostService],
})
export class UserModule {}
