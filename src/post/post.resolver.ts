import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField()
  async author(@Parent() post: Post) {
    const data = await this.postService.findOne({ id: post.id });
    return data?.author;
  }

  @Query(() => [Post], { name: 'posts' })
  async findAll() {
    return await this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.postService.findOne({ id: id });
  }

  @Mutation(() => Post)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return await this.postService.create(createPostInput);
  }

  @Mutation(() => Post)
  async updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return await this.postService.update(updatePostInput);
  }

  @Mutation(() => Post)
  async removePost(@Args('id', { type: () => Int }) id: number) {
    return await this.postService.remove({ id: id });
  }
}
