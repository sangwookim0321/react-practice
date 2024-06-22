import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const createPropertyResourceRequestPathSchema = businessAndPropertyIdSchema;

export const createPropertyResourceResponseSchema = createResponseSchema(z.object({}));

export type CreatePropertyResourceRequestPath = z.infer<typeof createPropertyResourceRequestPathSchema>;
export type CreatePropertyResourceResponse = z.infer<typeof createPropertyResourceResponseSchema>;
