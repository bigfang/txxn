import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [PrismaService, UsersResolver, UsersService],
})
export class UsersModule {}
