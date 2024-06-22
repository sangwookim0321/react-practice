import { z } from 'zod'

export const getProvisionCodeRequestPathSchema = z.object({
  business_id: z.string(),
  property_id: z.string(),
})

export const getProvisionCodeRequestQuerySchema = z.object({
  refresh: z.boolean().optional(),
})

export const getProvisionCodeResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    property_id: z.string(),
    code_type: z.string(),
    client_type: z.string(),
    code: z.string().length(6),
    expired_at: z.number(),
  }),
})

export const getSubsystemRequestPathSchema = z.object({
  business_id: z.string(),
  property_id: z.string(),
  subsystem_name: z.string(),
})

export const getSubsystemResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    subsystem_name: z.string(),
    status: z.record(z.string(), z.string()),
    created_at: z.number(),
  }),
})

// /businesses/{business-id}/properties/{property-id}/provisioncode/{provision-code} 여기엔 provision-code 가 있는데 아래 req path param에는 안보임. 확인 필요
export const deleteProvisionCodeRequestPathSchema = z.object({
  business_id: z.string(),
  property_id: z.string(),
  provision_code: z.string(),
})

export const deleteProvisionCodeRequestQuerySchema = z.object({
  refresh: z.boolean().optional(),
})

export const deleteProvisionCodeResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({}),
})

export const getDevicesRequestPathSchema = z.object({
  business_id: z.string(),
  property_id: z.string(),
})

export const getDevicesResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    total_count: z.number(),
    connected_count: z.number(),
    disconnected_count: z.number(),
  }),
})

export const getNotificationsNewResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    count: z.number(),
  }),
})

export const getNotificationsResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    notifications: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        priority: z.string(),
        created_at: z.number(),
        read_at: z.number().optional(),
      }),
    ),
  }),
})

export const getMonitorRequestQuerySchema = z.object({
  pagesize: z.number(),
  offset: z.number(),
})

export const getMonitorResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    data: z.array(
      z.object({
        room_id: z.string(),
        room_number: z.array(z.string()),
        groups: z.array(z.unknown()),
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
      }),
    ),
  }),
})

export const getMonitorGroupsRequestPathSchema = z.object({
  property_id: z.string(),
})

export const getMonitorGroupsResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    groups: z.array(
      z.object({
        name: z.string(),
        room_ids: z.array(z.string()),
      }),
    ),
  }),
})

export const getMonitorInitRequestPathSchema = z.object({
  property_id: z.string(),
})

export const getMonitorInitResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    data: z.object({
      connectionHandle: z.string(),
      connectionToken: z.string(),
    }),
  }),
})

export const postDetailRequestPathSchema = z.object({
  business_id: z.string(),
  room_id: z.string(),
})

export const postDetailRequestBodySchema = z.object({
  service_type: z.string(),
  service_code: z.string(),
  description: z.object({
    name: z.string(),
    count: z.number(),
  }),
})

export const postDetailResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    data: z.object({
      property_id: z.string(),
      room_id: z.string(),
      request_id: z.string(),
      service_type: z.string(),
      details: z.string(),
      requested_time: z.string(),
      delay_minutes: z.number(),
      status: z.string(),
    }),
  }),
})

export const putDetailRequestPathSchema = z.object({
  business_id: z.string(),
  room_id: z.string(),
})

export const putDetailRequestBodySchema = z.object({
  request: z.object({
    request_id: z.string(),
    status: z.string(),
  }),
  withCredentials: z.boolean(),
})

export const putDetailResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
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
  }),
})

export const deleteDetailResetCodeRequestPathSchema = z.object({
  property_id: z.string(),
  room_id: z.string(),
})

export const deleteDetailResetCodeResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
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
          }),
        ),
      }),
    }),
  }),
})

export const deleteMonitorPropertyRequestPathSchema = z.object({
  property_id: z.string(),
  room_id: z.string(),
})

export const getDetailRoomInfoRequestPathSchema = z.object({
  property_id: z.string(),
  room_id: z.string(),
})

export const getDetailRoomInfoResponseSchema = z.object({
  status: z.object({
    code: z.string(),
    message: z.string(),
  }),
  result: z.object({
    data: z.object({
      guest_name: z.string(),
      room_type: z.array(z.any()),
      property_id: z.string(),
      room_id: z.string(),
      check_in_date: z.string(),
      check_out_date: z.string(),
      access_code: z.string(),
    }),
  }),
})

export type GetProvisionCodeRequestPath = z.infer<typeof getProvisionCodeRequestPathSchema>
export type GetProvisionCodeRequestQuery = z.infer<typeof getProvisionCodeRequestQuerySchema>
export type GetProvisionCodeResponse = z.infer<typeof getProvisionCodeResponseSchema>
export type GetSubsystemRequestPath = z.infer<typeof getSubsystemRequestPathSchema>
export type GetSubsystemResponse = z.infer<typeof getSubsystemResponseSchema>
export type DeleteProvisionCodeRequestPath = z.infer<typeof deleteProvisionCodeRequestPathSchema>
export type DeleteProvisionCodeRequestQuery = z.infer<typeof deleteProvisionCodeRequestQuerySchema>
export type DeleteProvisionCodeResponse = z.infer<typeof deleteProvisionCodeResponseSchema>
export type GetDevicesRequestPath = z.infer<typeof getDevicesRequestPathSchema>
export type GetDevicesResponse = z.infer<typeof getDevicesResponseSchema>
export type GetNotificationsNewResponse = z.infer<typeof getNotificationsNewResponseSchema>
export type GetNotificationsResponse = z.infer<typeof getNotificationsResponseSchema>
export type GetMonitorRequestQuery = z.infer<typeof getMonitorRequestQuerySchema>
export type GetMonitorResponse = z.infer<typeof getMonitorResponseSchema>
export type GetMonitorGroupsRequestPath = z.infer<typeof getMonitorGroupsRequestPathSchema>
export type GetMonitorGroupsResponse = z.infer<typeof getMonitorGroupsResponseSchema>
export type GetMonitorInitRequestPath = z.infer<typeof getMonitorInitRequestPathSchema>
export type GetMonitorInitResponse = z.infer<typeof getMonitorInitResponseSchema>
export type PostDetailRequestPath = z.infer<typeof postDetailRequestPathSchema>
export type PostDetailRequestBody = z.infer<typeof postDetailRequestBodySchema>
export type PostDetailResponse = z.infer<typeof postDetailResponseSchema>
export type PutDetailRequestPath = z.infer<typeof putDetailRequestPathSchema>
export type PutDetailRequestBody = z.infer<typeof putDetailRequestBodySchema>
export type PutDetailResponse = z.infer<typeof putDetailResponseSchema>
export type DeleteDetailResetCodeRequestPath = z.infer<typeof deleteDetailResetCodeRequestPathSchema>
export type DeleteDetailResetCodeResponse = z.infer<typeof deleteDetailResetCodeResponseSchema>
export type DeleteMonitorPropertyRequestPath = z.infer<typeof deleteMonitorPropertyRequestPathSchema>
export type GetDetailRoomInfoRequestPath = z.infer<typeof getDetailRoomInfoRequestPathSchema>
export type GetDetailRoomInfoResponse = z.infer<typeof getDetailRoomInfoResponseSchema>
