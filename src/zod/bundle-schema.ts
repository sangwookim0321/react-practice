import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchBundleURLRequestPathSchema = businessAndPropertyIdSchema;

export const fetchBundleURLRequestBodySchema = z.object({
  bundle_type: z.enum(['channel_icons', 'smart_apps', 'TEMP', 'model_names']),
  direction: z.enum(['upload']),
  files: z.array(z.string()),
});

export const fetchBundleURLResponseSchema = createResponseSchema(
  z.object({
    urls: z.array(
      z.object({
        file: z.string(),
        upload_url: z.string(),
      })
    ),
  })
);

export const fetchBundleImportSettingTypeRequestPathSchema = businessAndPropertyIdSchema.extend({
  setting_type: z.enum(['channel_icons', 'smart_apps']),
});

export const fetchBundleImportSettingTypeRequestBodySchema = z.object({
  file_name: z.string(),
});

export const fetchBundleImportSettingTypeResponseSchema = createResponseSchema(
  z.object({
    result: z.string(),
  })
);

export const removeBundleFileRequestPathSchema = businessAndPropertyIdSchema.extend({
  file_name: z.string(),
});

export const removeBundleFileResponseSchema = createResponseSchema(z.object({}));

export type FetchBundleURLRequestPath = z.infer<typeof fetchBundleURLRequestPathSchema>;
export type FetchBundleURLRequest = z.infer<typeof fetchBundleURLRequestBodySchema>;
export type FetchBundleURLResponse = z.infer<typeof fetchBundleURLResponseSchema>;
export type FetchBundleImportSettingTypeRequestPath = z.infer<typeof fetchBundleImportSettingTypeRequestPathSchema>;
export type FetchBundleImportSettingTypeRequest = z.infer<typeof fetchBundleImportSettingTypeRequestBodySchema>;
export type FetchBundleImportSettingTypeResponse = z.infer<typeof fetchBundleImportSettingTypeResponseSchema>;
export type RemoveBundleFileRequestPath = z.infer<typeof removeBundleFileRequestPathSchema>;
export type RemoveBundleFileResponse = z.infer<typeof removeBundleFileResponseSchema>;
