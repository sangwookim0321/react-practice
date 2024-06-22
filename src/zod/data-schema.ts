import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchDataExportProjectRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const fetchDataExportProjectResponseSchema = createResponseSchema(
  z.object({
    signedURL: z.string(),
  })
);

export const fetchDataExportServerDescriptionProjectIdSettingsRequestPathSchema = z.object({
  business_id: z.string(),
  property_id: z.string(),
  description: z.string(),
  project_id: z.string(),
  settings: z.string(),
});

export const fetchDataExportServerDescriptionProjectIdSettingsResponseSchema = createResponseSchema(
  z.object({
    signedURL: z.string(),
  })
);

export const createDataImportProjectRequestPathSchema = businessAndPropertyIdSchema;

export const createDataImportProjectRequestBodySchema = z.object({
  path: z.string(),
  property_ids: z.array(z.string()),
  is_template: z.number(),
});

export const createDataImportProjectResponseSchema = createResponseSchema(
  z.object({
    project_ids: z.array(z.string()),
  })
);

export const createDataImportServerRequestPathSchema = businessAndPropertyIdSchema;

export const createDataImportServerRequestQuerySchema = z.object({
  sync: z.boolean().optional(),
});

export const createDataImportServerRequestBodySchema = z.object({
  path: z.string(),
});

export const createDataImportServerResponseSchema = createResponseSchema(
  z.object({
    project_ids: z.boolean(),
  })
);

export const createDataZipProjectRequestPathSchema = fetchDataExportProjectRequestPathSchema;

export const createDataZipProjectRequestBodySchema = z.object({
  project: z.string(),
  media_list: z.object({
    image: z.array(z.string()),
    font: z.array(z.string()),
    music: z.array(z.string()),
  }),
  widget_list: z.array(z.string()),
  server_variable: z.string(),
  videoClips: z.array(z.string()),
  deploymentGroup: z.array(z.string()),
  dxpId: z.string(),
  checkSize: z.boolean(),
});

export const createDataZipProjectResponseSchema = createResponseSchema(
  z.object({
    result: z.string(),
  })
);

export const updateDataDeployAppRequestPathSchema = businessAndPropertyIdSchema;

export const updateDataDeployAppRequestBodySchema = z.object({
  deploymentGroup: z.array(z.string()),
  dxpId: z.string(),
  onlyDeploy: z.boolean(),
});

export const updateDataDeployAppResponseSchema = createResponseSchema(
  z.object({
    progress_id: z.string(),
  })
);

export const updateDataDeployVideoClipRequestPathSchema = businessAndPropertyIdSchema;

export const updateDataDeployVideoClipRequestBodySchema = z.object({
  project: z.string(),
  media_list: z.object({
    image: z.array(z.string()),
    font: z.array(z.string()),
    music: z.array(z.string()),
  }),
  widget_list: z.array(z.string()),
  server_variable: z.string(),
  deploymentGroup: z.array(z.string()),
  videoClips: z.array(z.string()),
  dxpId: z.string(),
  checkSize: z.boolean(),
});

export const updateDataDeployVideoClipResponseSchema = createResponseSchema(z.object({}));

export type FetchDataExportProjectRequestPath = z.infer<typeof fetchDataExportProjectRequestPathSchema>;
export type FetchDataExportProjectResponse = z.infer<typeof fetchDataExportProjectResponseSchema>;
export type FetchDataExportServerDescriptionProjectIdSettingsRequestPath = z.infer<typeof fetchDataExportServerDescriptionProjectIdSettingsRequestPathSchema>;
export type FetchDataExportServerDescriptionProjectIdSettingsResponse = z.infer<typeof fetchDataExportServerDescriptionProjectIdSettingsResponseSchema>;
export type CreateDataImportProjectRequestPath = z.infer<typeof createDataImportProjectRequestPathSchema>;
export type CreateDataImportProjectRequestBody = z.infer<typeof createDataImportProjectRequestBodySchema>;
export type CreateDataImportProjectResponse = z.infer<typeof createDataImportProjectResponseSchema>;
export type CreateDataImportServerRequestPath = z.infer<typeof createDataImportServerRequestPathSchema>;
export type CreateDataImportServerRequestQuery = z.infer<typeof createDataImportServerRequestQuerySchema>;
export type CreateDataImportServerRequestBody = z.infer<typeof createDataImportServerRequestBodySchema>;
export type CreateDataImportServerResponse = z.infer<typeof createDataImportServerResponseSchema>;
export type CreateDataZipProjectRequestPath = z.infer<typeof createDataZipProjectRequestPathSchema>;
export type CreateDataZipProjectRequestBody = z.infer<typeof createDataZipProjectRequestBodySchema>;
export type CreateDataZipProjectResponse = z.infer<typeof createDataZipProjectResponseSchema>;
export type UpdateDataDeployAppRequestPath = z.infer<typeof updateDataDeployAppRequestPathSchema>;
export type UpdateDataDeployAppRequestBody = z.infer<typeof updateDataDeployAppRequestBodySchema>;
export type UpdateDataDeployAppResponse = z.infer<typeof updateDataDeployAppResponseSchema>;
export type UpdateDataDeployVideoClipRequestPath = z.infer<typeof updateDataDeployVideoClipRequestPathSchema>;
export type UpdateDataDeployVideoClipRequestBody = z.infer<typeof updateDataDeployVideoClipRequestBodySchema>;
export type UpdateDataDeployVideoClipResponse = z.infer<typeof updateDataDeployVideoClipResponseSchema>;
