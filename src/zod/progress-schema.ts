import { z } from 'zod';
import { createResponseSchema } from './common-schema';

export const fetchProgressRequestPathSchema = z.object({
  progress_id: z.string(),
});

export const fetchProgressResponseSchema = createResponseSchema(
  z.object({
    progress: z.object({
      ttl: z.string(),
      progress_id: z.string(),
      status: z.string(),
    }),
  })
);

export type FetchProgressRequestPath = z.infer<typeof fetchProgressRequestPathSchema>;
export type FetchProgressResponse = z.infer<typeof fetchProgressResponseSchema>;
