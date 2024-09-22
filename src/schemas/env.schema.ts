import { z } from 'zod'

export const envSchema = z.object({
	DATABASE_URL: z.string(),
	NODE_ENV: z
		.enum(['development', 'test', 'production'])
		.default('development'),
})
