import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class LoginArgs {
  username?: string;
  email?: string;
  password: string;
}
