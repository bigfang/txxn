import { Field, InputType, Int, OmitType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(OmitType(CreateUserInput, ['password'])) {
  @Field(() => Int)
  id: number;
}
