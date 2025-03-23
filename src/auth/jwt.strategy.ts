import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '6922F0C2-430A-4064-94BE-6444EE4EC331',
    });
  }

  validate(payload: { id: string; email: string; name: string }) {
    return { id: payload.id, email: payload.email, name: payload.name };
  }
}
