import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchMessageTickerWelcomeGreetingsRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageTickerWelcomeGreetingsRequestBodySchema = z.object({
  message_type: z.string(),
  is_send_now: z.boolean(),
  message_info: z.object({}),
});

export const fetchMessageTickerWelcomeGreetingsResponseSchema = createResponseSchema(
  z.object({
    message_id: z.string(),
  })
);

export const fetchMessageListRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageListRequestQuerySchema = z.object({
  message_type: z.string(),
});

export const fetchMessageListResponseSchema = createResponseSchema(
  z.object({
    items: z.array(
      z.object({
        type: z.string(),
        title: z.string().optional(),
        text: z.string().optional(),
        message_id: z.string(),
        property_id_type: z.string(),
        is_send: z.boolean(),
        sent_at: z.string().nullable(),
        created_at: z.number(),
        is_read: z.boolean(),
        property_id: z.string(),
        attributes: z.array(z.object({})).optional(),
      })
    ),
  })
);

export const fetchMessageInfoRequestPathSchema = businessAndPropertyIdSchema.extend({
  message_id: z.string(),
});

export const fetchMessageInfoResponseSchema = createResponseSchema(
  z.object({
    type: z.string(),
    title: z.string().optional(),
    text: z.string().optional(),
    message_id: z.string(),
    property_id_type: z.string(),
    is_send: z.boolean(),
    sent_at: z.string().nullable(),
    created_at: z.number(),
    is_read: z.boolean(),
    property_id: z.string(),
    attributes: z.object({}).optional(),
  })
);

export const fetchMessageTickerWelcomeGreetingsInfoRenewalRequestPathSchema = fetchMessageInfoRequestPathSchema;

export const fetchMessageTickerWelcomeGreetingsInfoRenewalRequestBodySchema = z.object({
  message_type: z.string(),
  is_send_now: z.boolean(),
  message_info: z.object({
    selectedType: z.string(),
    selectedRoomIds: z.array(z.string()),
    tickerData: z.array(
      z.object({
        langName: z.string(),
        message: z.string(),
        langCode: z.string(),
        direction: z.string(),
      })
    ),
    tickerScheduleData: z.object({
      repeat: z.number(),
      inputtedDate: z.object({
        startTime: z.string(),
      }),
      startTime: z.object({
        hour: z.number(),
        minute: z.number(),
      }),
      interval: z.number(),
      position: z.string(),
      textAttr: z.object({
        backgroundColor: z.string(),
        fontName: z.string(),
        fontId: z.string(),
        underline: z.boolean(),
        strikethru: z.boolean(),
        fontSize: z.string(),
        bold: z.boolean(),
        italic: z.boolean(),
        fontColor: z.string(),
      }),
      isActiveOnTV: z.boolean(),
      speed: z.number(),
      direction: z.string(),
      status: z.number(),
    }),
    selectedGroupNames: z.array(z.string()),
    selectedGroupIds: z.array(z.string()),
  }),
});

export const fetchMessageTickerWelcomeGreetingsInfoRenewalResponseSchema = createResponseSchema(
  z.object({
    message_id: z.string(),
  })
);

export const removeMessageRequestPathSchema = fetchMessageInfoRequestPathSchema;

export const removeMessageResponseSchema = createResponseSchema(z.object({}));

export const fetchMessageTemplateRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageTemplateRequestBodySchema = z.object({
  type: z.string(),
  title: z.string(),
  message: z.string(),
});

export const fetchMessageTemplateResponseSchema = createResponseSchema(
  z.object({
    template_ids: z.array(z.string()),
  })
);

export const fetchMessageTemplateListRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageTemplateListRequestQuerySchema = z.object({
  message_type: z.string(),
});

export const fetchMessageTemplateListResponseSchema = createResponseSchema(
  z.object({
    items: z.array(
      z.object({
        created_at: z.string(),
        property_id: z.string(),
        property_id_type: z.string(),
        template_id: z.string(),
        type: z.string(),
        attributes: z.object({
          type: z.string(),
          title: z.string(),
          message: z.string(),
        }),
      })
    ),
  })
);

export const fetchMessageTemplateInfoRenewalRequestPathSchema = businessAndPropertyIdSchema.extend({
  template_id: z.string(),
});

export const fetchMessageTemplateInfoRenewalRequestBodySchema = z.object({
  title: z.string(),
  message: z.string(),
});

export const fetchMessageTemplateInfoRenewalResponseSchema = createResponseSchema(
  z.object({
    template_ids: z.array(z.string()),
  })
);

export const removeMessageTemplateRequestPathSchema = fetchMessageTemplateInfoRenewalRequestPathSchema;

export const removeMessageTemplateResponseSchema = createResponseSchema(z.object({}));

export const fetchMessageTickerCommonFormatSetRequestPathSchema = businessAndPropertyIdSchema.extend({
  format_id: z.string(),
});

export const fetchMessageTickerCommonFormatSetRequestBodySchema = z.object({
  format: z.object({
    fontName: z.string().optional(),
    underline: z.boolean().optional(),
    boxColor: z.string().optional(),
    strikethru: z.boolean().optional(),
    boxType: z.string().optional(),
    fontSize: z.number().optional(),
    bold: z.boolean().optional(),
    isActiveOnTV: z.boolean(),
    italic: z.boolean().optional(),
    fontColor: z.string().optional(),
    status: z.boolean().optional(),
  }),
});

export const fetchMessageTickerCommonFormatSetResponseSchema = createResponseSchema(z.object({}));

export const fetchMessageTypeCommonFormatRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageTypeCommonFormatRequestQuerySchema = z.object({
  type: z.enum(['message', 'greetings', 'ticker']),
});

export const fetchMessageTypeCommonFormatResponseSchema = createResponseSchema(
  z.object({
    Items: z.array(
      z.object({
        updated_at: z.string(),
        format_id: z.string(),
        created_at: z.string(),
        property_id: z.string(),
        attributes: z.object({}),
        property_id_type: z.string(),
        type: z.string(),
      })
    ),
  })
);

export const fetchMessageADBannerListRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageADBannerListResponseSchema = createResponseSchema(
  z.object({
    Items: z.array(
      z.object({
        is_send: z.boolean(),
        sent_at: z.number(),
        created_at: z.number(),
        is_read: z.boolean(),
        type: z.string(),
        message_id: z.string(),
        property_id: z.string(),
        property_id_type: z.string(),
        attributes: z.object({}),
      })
    ),
  })
);

export const fetchMessageSpecificADBannerRequestPathSchema = businessAndPropertyIdSchema.extend({
  adbanner_id: z.string(),
});

export const fetchMessageSpecificADBannerResponseSchema = createResponseSchema(
  z.object({
    updated_at: z.number(),
    is_send: z.boolean(),
    sent_at: z.string(),
    created_at: z.number(),
    is_read: z.boolean(),
    property_id: z.string(),
    attributes: z.object({
      fID: z.number(),
      selectedGroupNames: z.array(z.string()),
      editedDate: z.number(),
      type: z.number(),
      nth_week: z.number(),
      deleteMap: z.array(z.unknown()),
      days_of_week: z.string(),
      selectedRoomIds: z.array(z.string()),
      media_info: z.object({
        media_id: z.string(),
        filename: z.string(),
        media_info: z.object({
          size: z.string(),
        }),
        media_url: z.string(),
        media_path: z.string(),
        uploader: z.string(),
      }),
      editMode: z.number(),
      inputtedDate: z.number(),
      selectedType: z.string(),
      changeRoomGroup: z.boolean(),
      interval: z.string(),
      startTime: z.number(),
      recurs_every: z.number(),
      status: z.number(),
      start_date: z.string(),
      selectedGroupIds: z.array(z.string()),
    }),
    message_id: z.string(),
    property_id_type: z.string(),
    type: z.string(),
  })
);

export const fetchMessageADBannerRegistrationRequestPathSchema = businessAndPropertyIdSchema;

export const fetchMessageADBannerRegistrationRequestQuerySchema = z.object({
  adbannerInfo: z.object({
    interval: z.string(),
    startTime: z.number(),
    status: z.number(),
    type: z.number(),
    start_date: z.string(),
    recurs_every: z.number(),
    days_of_week: z.string(),
    nth_week: z.number(),
    editMode: z.number(),
    selectedRoomIds: z.array(z.string()),
    selectedGroupIds: z.array(z.string()),
    selectedGroupNames: z.array(z.string()),
    selectedType: z.string(),
    changeRoomGroup: z.boolean(),
    fID: z.number(),
    media_info: z.object({
      filename: z.string(),
      uploader: z.string(),
      media_url: z.string(),
      media_id: z.string(),
      media_path: z.string(),
      media_info: z.object({
        size: z.string(),
      }),
    }),
    deleteMap: z.array(z.unknown()),
    inputtedDate: z.number(),
    editedDate: z.number(),
  }),
  objectId: z.string(),
  is_send_now: z.boolean(),
});

export const fetchMessageADBannerRegistrationResponseSchema = createResponseSchema(
  z.object({
    message_id: z.string(),
  })
);

export const fetchMessageADBannerRenewalRequestPathSchema = fetchMessageSpecificADBannerRequestPathSchema;

export const fetchMessageADBannerRenewalRequestQuerySchema = z.object({
  adbannerInfo: z.object({
    interval: z.string(),
    startTime: z.number(),
    status: z.number(),
    type: z.number(),
    start_date: z.string(),
    recurs_every: z.number(),
    days_of_week: z.string(),
    nth_week: z.number(),
    editMode: z.number(),
    selectedRoomIds: z.array(z.string()),
    selectedGroupIds: z.array(z.string()),
    selectedGroupNames: z.array(z.string()),
    selectedType: z.string(),
    changeRoomGroup: z.boolean(),
    fID: z.number(),
    media_info: z.object({
      filename: z.string(),
      uploader: z.string(),
      media_url: z.string(),
      media_id: z.string(),
      media_path: z.string(),
      media_info: z.object({
        size: z.string(),
      }),
    }),
    deleteMap: z.array(z.unknown()),
    inputtedDate: z.number(),
    editedDate: z.number(),
  }),
  objectId: z.string(),
  is_send_now: z.boolean(),
});

export const fetchMessageADBannerRenewalResponseSchema = createResponseSchema(
  z.object({
    message_id: z.string(),
  })
);

export const fetchMessageADBannerDeleteAndImageFileInfoRenewalRequestPathSchema = fetchMessageSpecificADBannerRequestPathSchema;

export const fetchMessageADBannerDeleteAndImageFileInfoRenewalRequestQuerySchema = z.object({
  objectId: z.string(),
});

export const fetchMessageADBannerDeleteAndImageFileInfoRenewalResponseSchema = createResponseSchema(z.object({}));

export type FetchMessageTickerWelcomeGreetingsRequestPath = z.infer<typeof fetchMessageTickerWelcomeGreetingsRequestPathSchema>;
export type FetchMessageTickerWelcomeGreetingsRequestBody = z.infer<typeof fetchMessageTickerWelcomeGreetingsRequestBodySchema>;
export type FetchMessageTickerWelcomeGreetingsResponse = z.infer<typeof fetchMessageTickerWelcomeGreetingsResponseSchema>;
export type FetchMessageListRequestPath = z.infer<typeof fetchMessageListRequestPathSchema>;
export type FetchMessageListRequestQuery = z.infer<typeof fetchMessageListRequestQuerySchema>;
export type FetchMessageListResponse = z.infer<typeof fetchMessageListResponseSchema>;
export type FetchMessageInfoRequestPath = z.infer<typeof fetchMessageInfoRequestPathSchema>;
export type FetchMessageInfoResponse = z.infer<typeof fetchMessageInfoResponseSchema>;
export type FetchMessageTickerWelcomeGreetingsInfoRenewalRequestPath = z.infer<typeof fetchMessageTickerWelcomeGreetingsInfoRenewalRequestPathSchema>;
export type FetchMessageTickerWelcomeGreetingsInfoRenewalRequestBody = z.infer<typeof fetchMessageTickerWelcomeGreetingsInfoRenewalRequestBodySchema>;
export type FetchMessageTickerWelcomeGreetingsInfoRenewalResponse = z.infer<typeof fetchMessageTickerWelcomeGreetingsInfoRenewalResponseSchema>;
export type RemoveMessageRequestPath = z.infer<typeof removeMessageRequestPathSchema>;
export type RemoveMessageResponse = z.infer<typeof removeMessageResponseSchema>;
export type FetchMessageTemplateRequestPath = z.infer<typeof fetchMessageTemplateRequestPathSchema>;
export type FetchMessageTemplateRequestBody = z.infer<typeof fetchMessageTemplateRequestBodySchema>;
export type FetchMessageTemplateResponse = z.infer<typeof fetchMessageTemplateResponseSchema>;
export type FetchMessageTemplateListRequestPath = z.infer<typeof fetchMessageTemplateListRequestPathSchema>;
export type FetchMessageTemplateListRequestQuery = z.infer<typeof fetchMessageTemplateListRequestQuerySchema>;
export type FetchMessageTemplateListResponse = z.infer<typeof fetchMessageTemplateListResponseSchema>;
export type FetchMessageTemplateInfoRenewalRequestPath = z.infer<typeof fetchMessageTemplateInfoRenewalRequestPathSchema>;
export type FetchMessageTemplateInfoRenewalRequestBody = z.infer<typeof fetchMessageTemplateInfoRenewalRequestBodySchema>;
export type FetchMessageTemplateInfoRenewalResponse = z.infer<typeof fetchMessageTemplateInfoRenewalResponseSchema>;
export type RemoveMessageTemplateRequestPath = z.infer<typeof removeMessageTemplateRequestPathSchema>;
export type RemoveMessageTemplateResponse = z.infer<typeof removeMessageTemplateResponseSchema>;
export type FetchMessageTickerCommonFormatSetRequestPath = z.infer<typeof fetchMessageTickerCommonFormatSetRequestPathSchema>;
export type FetchMessageTickerCommonFormatSetRequestBody = z.infer<typeof fetchMessageTickerCommonFormatSetRequestBodySchema>;
export type FetchMessageTickerCommonFormatSetResponse = z.infer<typeof fetchMessageTickerCommonFormatSetResponseSchema>;
export type FetchMessageTypeCommonFormatRequestPath = z.infer<typeof fetchMessageTypeCommonFormatRequestPathSchema>;
export type FetchMessageTypeCommonFormatRequestQuery = z.infer<typeof fetchMessageTypeCommonFormatRequestQuerySchema>;
export type FetchMessageTypeCommonFormatResponse = z.infer<typeof fetchMessageTypeCommonFormatResponseSchema>;
export type FetchMessageADBannerListRequestPath = z.infer<typeof fetchMessageADBannerListRequestPathSchema>;
export type FetchMessageADBannerListResponse = z.infer<typeof fetchMessageADBannerListResponseSchema>;
export type FetchMessageSpecificADBannerRequestPath = z.infer<typeof fetchMessageSpecificADBannerRequestPathSchema>;
export type FetchMessageSpecificADBannerResponse = z.infer<typeof fetchMessageSpecificADBannerResponseSchema>;
export type FetchMessageADBannerRegistrationRequestPath = z.infer<typeof fetchMessageADBannerRegistrationRequestPathSchema>;
export type FetchMessageADBannerRegistrationRequestQuery = z.infer<typeof fetchMessageADBannerRegistrationRequestQuerySchema>;
export type FetchMessageADBannerRegistrationResponse = z.infer<typeof fetchMessageADBannerRegistrationResponseSchema>;
export type FetchMessageADBannerRenewalRequestPath = z.infer<typeof fetchMessageADBannerRenewalRequestPathSchema>;
export type FetchMessageADBannerRenewalRequestQuery = z.infer<typeof fetchMessageADBannerRenewalRequestQuerySchema>;
export type FetchMessageADBannerRenewalResponse = z.infer<typeof fetchMessageADBannerRenewalResponseSchema>;
export type FetchMessageADBannerDeleteAndImageFileInfoRenewalRequestPath = z.infer<typeof fetchMessageADBannerDeleteAndImageFileInfoRenewalRequestPathSchema>;
export type FetchMessageADBannerDeleteAndImageFileInfoRenewalRequestQuery = z.infer<typeof fetchMessageADBannerDeleteAndImageFileInfoRenewalRequestQuerySchema>;
export type FetchMessageADBannerDeleteAndImageFileInfoRenewalResponse = z.infer<typeof fetchMessageADBannerDeleteAndImageFileInfoRenewalResponseSchema>;
