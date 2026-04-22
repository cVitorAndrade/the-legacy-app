export abstract class EnvConfig {
  abstract getAppPort(): number;
  abstract getNodeEnv(): string;
  abstract getDatabaseUrl(): string;
  abstract getAccessTokenSecret(): string;
  abstract getRefreshTokenSecret(): string;
  abstract getAccessTokenExpiresIn(): string;
  abstract getRefreshTokenExpiresIn(): string;
}
