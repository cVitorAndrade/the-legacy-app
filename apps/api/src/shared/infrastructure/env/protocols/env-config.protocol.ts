export abstract class EnvConfig {
  abstract getAppPort(): number;
  abstract getNodeEnv(): string;
  abstract getDatabaseUrl(): string;
}
