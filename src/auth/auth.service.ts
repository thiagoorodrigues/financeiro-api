import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { StatusEnum } from 'src/enums/status.enum';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user?.status !== StatusEnum.ACTIVE) {
      throw new UnauthorizedException({
        message: 'Os dados de usuário e ou senha estão inválidos.',
      });
    }
    if (!user) {
      throw new UnauthorizedException({
        message: 'Os dados de usuário e ou senha estão inválidos.',
      });
    }
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException({
        message: 'Os dados de usuário e ou senha estão inválidos.',
      });
    }
    const payload = { id: user.id, email: user.email, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
