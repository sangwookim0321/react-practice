import { z } from 'zod';
import { propertyIdSchema, createResponseSchema } from './common-schema';

export const fetchOperatorListRequestPathSchema = propertyIdSchema;

export const fetchOperatorListResponseSchema = createResponseSchema(
  z.object({
    propertyCode: z.string(),
    operators: z.array(
      z.object({
        operatorId: z.string(),
        rooms: z.array(z.string()),
        type: z.string(),
      })
    ),
  })
);

export const fetchConciergeInfoRequestPathSchema = propertyIdSchema;

export const fetchConciergeInfoResponseSchema = createResponseSchema(
  z.object({
    serviceType: z.array(
      z.object({
        updated_at: z.string(),
        delay_time: z.number(),
        created_at: z.string(),
        icon_url: z.string(),
        is_use: z.boolean(),
        property_id: z.string(),
        description: z.string(),
        service_type: z.string(),
        name: z.string(),
      })
    ),
    amenities: z.array(
      z.object({
        name: z.string(),
        code: z.string(),
        type: z.string(),
        description: z.object({
          is_use: z.boolean(),
          max: z.number(),
        }),
        group: z.array(z.string()),
        totalGroup: z.array(z.string()),
      })
    ),
  })
);

export const fetchQmsInstallationStatusRequestPathSchema = propertyIdSchema;

export const fetchQmsInstallationStatusResponseSchema = createResponseSchema(
  z.object({
    installed: z.boolean(),
  })
);

export const createStaffRequestPathSchema = propertyIdSchema;

export const createStaffRequestBodySchema = z.object({
  operatorId: z.string(),
  password: z.string(),
  type: z.string(),
});

export const createStaffResponseSchema = createResponseSchema(
  z.object({
    result: z.string(),
  })
);

export const createStaffInvitationRequestPathSchema = propertyIdSchema;

export const createStaffInvitationRequestBodySchema = z.object({
  email: z.array(z.string().email()),
});

export const createStaffInvitationResponseSchema = createResponseSchema(z.object({}));

export const createAmenityItemRequestPathSchema = propertyIdSchema;

export const createAmenityItemRequestBodySchema = z.object({
  name: z.string(),
  max: z.number(),
  isUse: z.boolean(),
  group: z.array(z.string()),
  delay_time: z.number(),
});

export const createAmenityItemResponseSchema = createResponseSchema(
  z.array(
    z.object({
      type: z.string(),
      name: z.string(),
      code: z.string(),
      group: z.string(),
      description: z.object({
        maximumQuantity: z.number(),
        is_use: z.boolean(),
      }),
      groupId: z.string(),
      createdAt: z.number(),
      updatedAt: z.number(),
    })
  )
);

export const updateAmenityItemRequestPathSchema = propertyIdSchema;

export const updateAmenityItemRequestBodySchema = z.object({
  subject: z.string(),
  amenity: z.object({
    name: z.string(),
    type: z.string(),
    code: z.string(),
    group: z.array(z.string()),
    description: z.object({
      is_use: z.boolean(),
      max: z.number(),
    }),
  }),
});

export const updateAmenityItemResponseSchema = createResponseSchema(z.any());

export const removeServiceItemRequestPathSchema = propertyIdSchema;

export const removeServiceItemRequestBodySchema = z.object({
  code: z.string(),
  type: z.string(),
});

export const removeServiceItemResponseSchema = createResponseSchema(z.any());

export const removeStaffRequestPathSchema = propertyIdSchema;

export const removeStaffRequestBodySchema = z.object({
  id: z.array(z.string()),
});

export const removeStaffResponseSchema = createResponseSchema(z.any());

export type FetchOperatorListRequestPath = z.infer<typeof fetchOperatorListRequestPathSchema>;
export type FetchOperatorListResponse = z.infer<typeof fetchOperatorListResponseSchema>;
export type FetchConciergeInfoRequestPath = z.infer<typeof fetchConciergeInfoRequestPathSchema>;
export type FetchConciergeInfoResponse = z.infer<typeof fetchConciergeInfoResponseSchema>;
export type FetchQmsInstallationStatusRequestPath = z.infer<typeof fetchQmsInstallationStatusRequestPathSchema>;
export type FetchQmsInstallationStatusResponse = z.infer<typeof fetchQmsInstallationStatusResponseSchema>;
export type CreateStaffRequestPath = z.infer<typeof createStaffRequestPathSchema>;
export type CreateStaffRequestBody = z.infer<typeof createStaffRequestBodySchema>;
export type CreateStaffResponse = z.infer<typeof createStaffResponseSchema>;
export type CreateStaffInvitationRequestPath = z.infer<typeof createStaffInvitationRequestPathSchema>;
export type CreateStaffInvitationRequestBody = z.infer<typeof createStaffInvitationRequestBodySchema>;
export type CreateStaffInvitationResponse = z.infer<typeof createStaffInvitationResponseSchema>;
export type CreateAmenityItemRequestPath = z.infer<typeof createAmenityItemRequestPathSchema>;
export type CreateAmenityItemRequestBody = z.infer<typeof createAmenityItemRequestBodySchema>;
export type CreateAmenityItemResponse = z.infer<typeof createAmenityItemResponseSchema>;
export type UpdateAmenityItemRequestPath = z.infer<typeof updateAmenityItemRequestPathSchema>;
export type UpdateAmenityItemRequestBody = z.infer<typeof updateAmenityItemRequestBodySchema>;
export type UpdateAmenityItemResponse = z.infer<typeof updateAmenityItemResponseSchema>;
export type RemoveServiceItemRequestPath = z.infer<typeof removeServiceItemRequestPathSchema>;
export type RemoveServiceItemRequestBody = z.infer<typeof removeServiceItemRequestBodySchema>;
export type RemoveServiceItemResponse = z.infer<typeof removeServiceItemResponseSchema>;
export type RemoveStaffRequestPath = z.infer<typeof removeStaffRequestPathSchema>;
export type RemoveStaffRequestBody = z.infer<typeof removeStaffRequestBodySchema>;
export type RemoveStaffResponse = z.infer<typeof removeStaffResponseSchema>;
