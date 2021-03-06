import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { LoginResult } from '../entities/login.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, email: string, password: string): Promise<LoginResult> {
    const user = await this.authService.validateUser({
      username: username,
      email: email,
      password: password,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
