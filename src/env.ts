import { envSchema } from '@/schemas/env.schema'

export const env = envSchema.parse({
	NODE_ENV: process.env.NODE_ENV,
	DATABASE_URL: process.env.DATABASE_URL,
})
