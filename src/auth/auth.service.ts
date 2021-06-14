import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { LoginArgs } from './dto/login.args';
import { LoginResult } from './entities/login.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(loginArgs: LoginArgs): Promise<LoginResult | undefined> {
    const { username, email, password } = loginArgs;
    const user = await this.userService.findOne({ username: username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      const token = await this.createAccessToken(user);
      return {
        id: result.id,
        username: result.username,
        access_token: token,
      };
    }
    return undefined;
  }

  async createAccessToken(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
