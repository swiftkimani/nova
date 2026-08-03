import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  NEXT_BASE_PATH: z.string().optional(),
})

/**
 * Validated process.env, parsed once at import time so a misconfigured
 * deployment fails fast and loudly instead of reading `undefined` deep
 * inside a request handler. Add new variables to the schema above.
 */
export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_BASE_PATH: process.env.NEXT_BASE_PATH,
})
