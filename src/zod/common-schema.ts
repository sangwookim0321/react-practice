import { z } from 'zod';

export const statusSchema = z.object({
  code: z.string(),
  message: z.string(),
});

export const createResponseSchema = (resultSchema: z.ZodTypeAny) => {
  return z.object({
    status: statusSchema,
    result: resultSchema,
  });
};

export const refreshQuerySchema = z.object({
  refresh: z.boolean().optional(),
});

export const businessIdSchema = z.object({
  business_id: z.string(),
});

export const propertyIdSchema = z.object({
  property_id: z.string(),
});

export const roomIdSchema = z.object({
  room_id: z.string(),
});

export const businessAndPropertyIdSchema = z.object({
  business_id: z.string(),
  property_id: z.string(),
});

export const businessAndRoomIdSchema = z.object({
  business_id: z.string(),
  room_id: z.string(),
});

export const propertyAndRoomIdSchema = z.object({
  property_id: z.string(),
  room_id: z.string(),
});

export const contentIdAndPropertyIdSchema = z.object({
  content_id: z.string(),
  property_id: z.string(),
});

export const groupIdsSchema = z.object({
  group_id: z.string(),
});
