import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: LocalAuthGuard,
    },
  ],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: { numberScalarMode: 'integer' },
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
