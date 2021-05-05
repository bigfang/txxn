import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UsersModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
