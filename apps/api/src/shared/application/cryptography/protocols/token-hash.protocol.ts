export abstract class TokenHashProvider {
  abstract hash(rawToken: string): string;
}
