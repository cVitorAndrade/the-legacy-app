import { z } from 'zod';

export const envSchema = z.object({
  API_PORT: z.coerce.number(),
  NODE_ENV: z.string().default('development'),
  DATABASE_URL: z.string(),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  ACCESS_TOKEN_EXPIRES_IN_MS: z.coerce.number(),
  REFRESH_TOKEN_EXPIRES_IN_MS: z.coerce.number(),
});

export type EnvVariables = z.infer<typeof envSchema>;
