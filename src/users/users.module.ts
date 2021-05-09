import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [PrismaService, UsersResolver, UsersService],
})
export class UsersModule {}
