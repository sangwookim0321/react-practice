import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchSettingObjectTypeUploadRequestPathSchema = businessAndPropertyIdSchema.extend({
  objectType: z.enum(['video_clip', 'splash_screen', 'tv_configuration', 'fw_update']),
});

export const fetchSettingObjectTypeUploadRequestBodySchema = z.object({
  file_name: z.string(),
  file_size: z.string(),
  created: z.string(),
});

export const fetchSettingObjectTypeUploadResponseSchema = createResponseSchema(
  z.object({
    user_id: z.string(),
    created_at: z.number(),
    user_roles: z.array(
      z.object({
        role_id: z.string(),
        role_name: z.string(),
      })
    ),
  })
);

export const removeSettingObjectInternalUploadFileRequestPathSchema = fetchSettingObjectTypeUploadRequestPathSchema;

export const removeSettingObjectInternalUploadFileResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingObjectCommonS3UploadRequestPathSchema = fetchSettingObjectTypeUploadRequestPathSchema;

export const fetchSettingObjectCommonS3UploadRequestBodySchema = z.object({
  object_id: z.string(),
  version: z.string(),
  object_info: z.object({
    service_type: z.string(),
    file_size: z.number(),
    tv_models: z.array(z.string()),
  }),
});

export const fetchSettingObjectCommonS3UploadResponseSchema = createResponseSchema(
  z.object({
    progress_id: z.string(),
  })
);

export const fetchSettingObjectCommonS3UploadStateRequestPathSchema = fetchSettingObjectTypeUploadRequestPathSchema;

export const fetchSettingObjectCommonS3UploadStateResponseSchema = createResponseSchema(
  z.object({
    objects: z.array(
      z.object({
        progress_id: z.string().optional(),
        object_info: z
          .object({
            service_type: z.string().optional(),
            file_size: z.number().optional(),
            tv_models: z.array(z.string()).optional(),
          })
          .optional(),
        object_id: z.string().optional(),
        version: z.string().optional(),
      })
    ),
    files: z.array(
      z.object({
        file_name: z.string().optional(),
        file_size: z.number().optional(),
        created: z.number().optional(),
      })
    ),
  })
);

export const fetchSettingObjectTVModelListEditRequestPathSchema = businessAndPropertyIdSchema.extend({
  objectType: z.enum(['splash_screen', 'tv_configuration', 'fw_update']),
  objectId: z.string(),
  version: z.string(),
});

export const fetchSettingObjectTVModelListEditRequestBodySchema = z.object({
  object_info: z.object({
    service_type: z.string(),
    file_size: z.number(),
    tv_models: z.array(z.string()),
  }),
});

export const fetchSettingObjectTVModelListEditResponseSchema = createResponseSchema(z.object({}));

export const removeSettingObjectRequestPathSchema = fetchSettingObjectTVModelListEditRequestPathSchema;

export const removeSettingObjectResponseSchema = createResponseSchema(z.object({}));

export type FetchSettingObjectTypeUploadRequestPath = z.infer<typeof fetchSettingObjectTypeUploadRequestPathSchema>;
export type FetchSettingObjectTypeUploadRequestBody = z.infer<typeof fetchSettingObjectTypeUploadRequestBodySchema>;
export type FetchSettingObjectTypeUploadResponse = z.infer<typeof fetchSettingObjectTypeUploadResponseSchema>;
export type RemoveSettingObjectInternalUploadFileRequestPath = z.infer<typeof removeSettingObjectInternalUploadFileRequestPathSchema>;
export type RemoveSettingObjectInternalUploadFileResponse = z.infer<typeof removeSettingObjectInternalUploadFileResponseSchema>;
export type FetchSettingObjectCommonS3UploadRequestPath = z.infer<typeof fetchSettingObjectCommonS3UploadRequestPathSchema>;
export type FetchSettingObjectCommonS3UploadRequestBody = z.infer<typeof fetchSettingObjectCommonS3UploadRequestBodySchema>;
export type FetchSettingObjectCommonS3UploadResponse = z.infer<typeof fetchSettingObjectCommonS3UploadResponseSchema>;
export type FetchSettingObjectCommonS3UploadStateRequestPath = z.infer<typeof fetchSettingObjectCommonS3UploadStateRequestPathSchema>;
export type FetchSettingObjectCommonS3UploadStateResponse = z.infer<typeof fetchSettingObjectCommonS3UploadStateResponseSchema>;
export type FetchSettingObjectTVModelListEditRequestPath = z.infer<typeof fetchSettingObjectTVModelListEditRequestPathSchema>;
export type FetchSettingObjectTVModelListEditRequestBody = z.infer<typeof fetchSettingObjectTVModelListEditRequestBodySchema>;
export type FetchSettingObjectTVModelListEditResponse = z.infer<typeof fetchSettingObjectTVModelListEditResponseSchema>;
export type RemoveSettingObjectRequestPath = z.infer<typeof removeSettingObjectRequestPathSchema>;
export type RemoveSettingObjectResponse = z.infer<typeof removeSettingObjectResponseSchema>;
