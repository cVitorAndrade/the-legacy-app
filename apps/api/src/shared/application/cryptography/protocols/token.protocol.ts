export abstract class TokenProvider {
  abstract sign<TPayload extends object>(
    payload: TPayload,
    secret: string,
    expiresIn: string | number,
  ): string;
  abstract verify<T = any>(token: string, secret: string): T;
}
