import { z } from 'zod';
import { propertyIdSchema, propertyAndRoomIdSchema, createResponseSchema } from './common-schema';

export const fetchDashboardMonitorRequestPathSchema = propertyIdSchema;

export const fetchDashboardMonitorRequestQuerySchema = z.object({
  pagesize: z.number(),
  offset: z.number().default(0),
});

export const fetchDashboardMonitorResponseSchema = createResponseSchema(
  z.object({
    data: z.array(
      z.object({
        room_id: z.string(),
        room_number: z.string(),
        groups: z.array(z.string()),
        check_in_date: z.string(),
        check_out_date: z.string(),
        is_occupied: z.boolean(),
        guest_name: z.string(),
        guest_app_code: z.string(),
        request_state_amenity: z.boolean(),
        request_state_laundry: z.boolean(),
        request_state_mur: z.boolean(),
        request_state_dnd: z.boolean(),
        request_state_alarm: z.boolean(),
        timestamp: z.number(),
      })
    ),
  })
);

export const fetchDashboardMonitorGroupsRequestPathSchema = propertyIdSchema;

export const fetchDashboardMonitorGroupsResponseSchema = createResponseSchema(
  z.object({
    groups: z.array(
      z.object({
        name: z.string(),
        room_ids: z.array(z.string()),
      })
    ),
  })
);

export const fetchDashboardMonitorInitRequestPathSchema = propertyIdSchema;

export const fetchDashboardMonitorInitResponseSchema = createResponseSchema(
  z.object({
    data: z.object({
      connectionHandle: z.string(),
      connectionToken: z.string(),
    }),
  })
);

export const fetchDashboardDetailRequestRequestPathSchema = propertyAndRoomIdSchema;

export const fetchDashboardDetailRequestResponseSchema = createResponseSchema(
  z.object({
    data: z.array(
      z.object({
        property_id: z.string(),
        room_id: z.string(),
        request_id: z.string(),
        service_type: z.string(),
        details: z.string(),
        requested_time: z.string(),
        delay_minutes: z.number(),
        status: z.enum(['N', 'X', 'F']),
      })
    ),
  })
);

export const fetchDashboardDetailRoomInfoRequestPathSchema = propertyAndRoomIdSchema;

export const fetchDashboardDetailRoomInfoResponseSchema = createResponseSchema(
  z.object({
    data: z.object({
      guest_name: z.string(),
      room_type: z.array(z.string()),
      property_id: z.string(),
      room_id: z.string(),
      check_in_date: z.string(),
      check_out_date: z.string(),
      access_code: z.string(),
    }),
  })
);

export const deleteDashboardDetailResetCodeRequestPathSchema = propertyAndRoomIdSchema;

export const deleteDashboardDetailResetCodeResponseSchema = createResponseSchema(
  z.object({
    data: z.object({
      property_id: z.string(),
      room_id: z.string(),
      access_code: z.object({
        status: z.object({
          code: z.string(),
          message: z.string(),
        }),
        payload: z.array(
          z.object({
            clientId: z.string(),
            pinCode: z.string(),
            checked: z.boolean(),
          })
        ),
      }),
    }),
  })
);

export const updateDashboardDetailRequestRequestPathSchema = propertyAndRoomIdSchema;

export const updateDashboardDetailRequestRequestBodySchema = z.object({
  request: z.object({
    request_id: z.string(),
    status: z.string(),
  }),
  withCredentials: z.boolean().default(true),
});

export const updateDashboardDetailRequestResponseSchema = createResponseSchema(
  z.object({
    data: z.object({
      property_id: z.string(),
      room_id: z.string(),
      request_id: z.string(),
      service_type: z.string(),
      details: z.object({
        count: z.number(),
      }),
      requested_time: z.string(),
      delay_minutes: z.number(),
      status: z.string(),
    }),
  })
);

export type FetchDashboardMonitorRequestPath = z.infer<typeof fetchDashboardMonitorRequestPathSchema>;
export type FetchDashboardMonitorRequestQuery = z.infer<typeof fetchDashboardMonitorRequestQuerySchema>;
export type FetchDashboardMonitorResponse = z.infer<typeof fetchDashboardMonitorResponseSchema>;
export type FetchDashboardMonitorGroupsRequestPath = z.infer<typeof fetchDashboardMonitorGroupsRequestPathSchema>;
export type FetchDashboardMonitorGroupsResponse = z.infer<typeof fetchDashboardMonitorGroupsResponseSchema>;
export type FetchDashboardMonitorInitRequestPath = z.infer<typeof fetchDashboardMonitorInitRequestPathSchema>;
export type FetchDashboardMonitorInitResponse = z.infer<typeof fetchDashboardMonitorInitResponseSchema>;
export type FetchDashboardDetailRequestRequestPath = z.infer<typeof fetchDashboardDetailRequestRequestPathSchema>;
export type FetchDashboardDetailRequestResponse = z.infer<typeof fetchDashboardDetailRequestResponseSchema>;
export type FetchDashboardDetailRoomInfoRequestPath = z.infer<typeof fetchDashboardDetailRoomInfoRequestPathSchema>;
export type FetchDashboardDetailRoomInfoResponse = z.infer<typeof fetchDashboardDetailRoomInfoResponseSchema>;
export type DeleteDashboardDetailResetCodeRequestPath = z.infer<typeof deleteDashboardDetailResetCodeRequestPathSchema>;
export type DeleteDashboardDetailResetCodeResponse = z.infer<typeof deleteDashboardDetailResetCodeResponseSchema>;
export type UpdateDashboardDetailRequestRequestPath = z.infer<typeof updateDashboardDetailRequestRequestPathSchema>;
export type UpdateDashboardDetailRequestRequest = z.infer<typeof updateDashboardDetailRequestRequestBodySchema>;
export type UpdateDashboardDetailRequestResponse = z.infer<typeof updateDashboardDetailRequestResponseSchema>;
