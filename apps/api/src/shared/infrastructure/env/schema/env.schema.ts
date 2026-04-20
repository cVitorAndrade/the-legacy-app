import { z } from 'zod';

export const envSchema = z.object({
  API_PORT: z.coerce.number(),
  NODE_ENV: z.string().default('development'),
  DATABASE_URL: z.string(),
});

export type EnvVariables = z.infer<typeof envSchema>;
