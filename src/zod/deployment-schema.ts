import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchDeployObjectsRequestPathSchema = businessAndPropertyIdSchema;

export const fetchDeployObjectsRequestQuerySchema = z.object({
  objectType: z.string(),
  dxp_id: z.string(),
});

export const fetchDeployObjectsResponseSchema = createResponseSchema(
  z.object({
    property_id: z.string(),
    object_type: z.string(),
    objects: z.array(
      z.object({
        object_id: z.string(),
        version: z.string(),
        is_default: z.boolean(),
        object_size: z.number(),
        created_at: z.number(),
        download_url: z.string(),
        url_expired_at: z.number(),
      })
    ),
  })
);

export type FetchDeployObjectsRequestPath = z.infer<typeof fetchDeployObjectsRequestPathSchema>;
export type FetchDeployObjectsRequestQuery = z.infer<typeof fetchDeployObjectsRequestQuerySchema>;
export type FetchDeployObjectsResponse = z.infer<typeof fetchDeployObjectsResponseSchema>;
