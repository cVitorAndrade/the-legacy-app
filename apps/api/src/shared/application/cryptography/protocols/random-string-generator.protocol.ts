export abstract class RandomStringGeneratorProvider {
  abstract generateString(bytes?: number): string;
  abstract generateUUID(): string;
}
