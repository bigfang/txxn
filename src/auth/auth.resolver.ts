import { Args, Query, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/public.decorator';
import AuthService from './auth.service';
import { LoginArgs } from './dto/login.args';
import { LoginResult } from './entities/login.entity';

@Resolver(() => LoginResult)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Query(() => LoginResult)
  async login(@Args() loginArgs: LoginArgs) {
    return await this.authService.validateUser(loginArgs);
  }
}
