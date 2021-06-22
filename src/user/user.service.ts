import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const { username, email, password } = createUserInput;
    const passwordHash = await bcrypt.hash(password, 10);
    return await this.prisma.user.create({
      data: { username: username, email: email, password: passwordHash },
    });
  }

  async findAll(where?: Prisma.UserWhereInput) {
    return await this.prisma.user.findMany({ where: where });
  }

  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async update(updateUserInput: UpdateUserInput) {
    const { id, ...restInput } = updateUserInput;
    return await this.prisma.user.update({
      where: { id: id },
      data: restInput,
    });
  }

  async remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}
