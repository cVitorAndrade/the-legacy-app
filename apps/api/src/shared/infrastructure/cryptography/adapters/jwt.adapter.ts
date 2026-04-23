import { TokenProvider } from 'src/shared/application/cryptography/protocols/token.protocol';
import jwt, { SignOptions } from 'jsonwebtoken';

export class JwtAdapter implements TokenProvider {
  constructor() {}

  sign<TPayload extends object>(
    payload: TPayload,
    secret: string,
    expiresIn: string | number,
  ): string {
    return jwt.sign(payload, secret, {
      algorithm: 'HS256',
      expiresIn: expiresIn as SignOptions['expiresIn'],
    });
  }

  verify<T = any>(token: string, secret: string): T {
    return jwt.verify(token, secret, {
      algorithms: ['HS256'],
    }) as T;
  }
}
