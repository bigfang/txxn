import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/common/services/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const { username, email, password } = createUserInput;
    const passwordHash = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { username: username, email: email, password: passwordHash },
    });
  }

  findAll(where?: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({ where: where });
  }

  findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async update(updateUserInput: UpdateUserInput) {
    const { id, ...restInput } = updateUserInput;
    return this.prisma.user.update({
      where: { id: id },
      data: restInput,
    });
  }

  remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}
