import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchSettingTvRequestPathSchema = businessAndPropertyIdSchema.extend({
  setting_type: z.string(),
});

export const fetchSettingTvResponseSchema = createResponseSchema(
  z.object({
    smart_apps: z.object({
      bundle: z.object({
        date: z.string(),
        author: z.string(),
        name: z.string(),
        description: z.string(),
        type: z.literal('apps'),
        region: z.string(),
        version: z.string(),
      }),
      selected_apps: z.array(z.string()),
      apps: z.array(
        z.object({
          image: z.string(),
          browser_type: z.string(),
          icon: z.string(),
          assigned_projects: z.array(z.string()),
          title: z.string(),
          type: z.string(),
          param_type: z.string().nullable(),
          name: z.string(),
          id: z.string(),
          app_id: z.string(),
          value: z.string(),
          status: z.string(),
          order: z.string(),
          desc: z.record(
            z.object({
              description: z.string(),
              lang_name: z.string(),
              is_default: z.string(),
              lang_code: z.string(),
            })
          ),
        })
      ),
    }),
  })
);

export const fetchSettingLocaleRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingLocaleResponseSchema = createResponseSchema(
  z.object({
    locale: z.object({
      broadcast_network: z.string(),
      iso_country: z.string(),
      start_channel_logical_number: z.number(),
      start_channel_active: z.boolean(),
    }),
  })
);

export const fetchSettingChannelIconListRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingChannelIconListResponseSchema = createResponseSchema(
  z.object({
    channel_icons: z.object({
      bundle: z.object({
        author: z.string(),
        date: z.string(),
        description: z.string(),
        name: z.string(),
        region: z.string(),
        type: z.string(),
        version: z.string(),
      }),
      list: z.array(
        z.object({
          filename: z.string().optional(),
          name: z.string().optional(),
          type: z.string().optional(),
        })
      ),
    }),
  })
);

export const fetchSettingSmartAppsRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingSmartAppsResponseSchema = createResponseSchema(
  z.object({
    smart_apps: z.object({
      bundle: z.object({
        date: z.string(),
        author: z.string(),
        name: z.string(),
        description: z.string(),
        type: z.literal('apps'),
        region: z.string(),
        version: z.string(),
      }),
      selected_apps: z.array(z.string()),
      apps: z.array(
        z.object({
          image: z.string(),
          browser_type: z.string(),
          icon: z.string(),
          assigned_projects: z.array(z.string()),
          title: z.string(),
          type: z.string(),
          param_type: z.string().nullable(),
          name: z.string(),
          id: z.string(),
          app_id: z.string(),
          value: z.string(),
          status: z.string(),
          order: z.string(),
          desc: z.record(
            z.object({
              description: z.string(),
              lang_name: z.string(),
              is_default: z.string(),
              lang_code: z.string(),
            })
          ),
        })
      ),
    }),
  })
);

export const fetchSettingVideoClipListRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingVideoClipListResponseSchema = createResponseSchema(
  z.object({
    video_clip: z.array(
      z.object({
        created_at: z.number().optional(),
        object_id: z.string().optional(),
        version: z.string().optional(),
        object_size: z.number().optional(),
      })
    ),
  })
);

export const fetchSettingModelNameRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingModelNameResponseSchema = createResponseSchema(
  z.object({
    model_names: z.object({
      bundle: z.object({
        author: z.string(),
        date: z.string(),
        description: z.string(),
        name: z.string(),
        region: z.string(),
        type: z.string(),
        version: z.string(),
      }),
      atsc: z.array(z.string()),
      dvb: z.array(z.string()),
    }),
  })
);

export const fetchSettingSsaiRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingSsaiResponseSchema = createResponseSchema(
  z.object({
    ssai: z.object({
      customerCode: z.string(),
      siName: z.string(),
    }),
  })
);

export const fetchSettingTvEditRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingTvEditRequestBodySchema = z.object({
  portal_timeout: z.number(),
  power_mode: z.number(),
  language_reset_time: z.object({
    hour: z.number(),
    minute: z.number(),
  }),
  date_format: z.object({
    lang_code: z.string(),
    date_format_id: z.number(),
  }),
  languages: z.array(z.string()),
});

export const fetchSettingTvEditResponseSchema = createResponseSchema(
  z.object({
    Attributes: z.object({
      tv_general: z.object({
        portal_timeout: z.number(),
        power_mode: z.number(),
        language_reset_time: z.object({
          hour: z.number(),
          minute: z.number(),
        }),
        date_format: z.object({
          lang_code: z.string(),
          date_format_id: z.number(),
        }),
        languages: z.array(z.string()),
      }),
    }),
  })
);

export const fetchSettingLocaleInfoRenewalRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingLocaleInfoRenewalRequestBodySchema = z.object({
  broadcast_network: z.string(),
  iso_country: z.string(),
  start_channel_active: z.boolean(),
  start_channel_logical_number: z.number(),
});

export const fetchSettingLocaleInfoRenewalResponseSchema = createResponseSchema(
  z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Attributes: z.object({
      locale: z.object({
        broadcast_network: z.string(),
        iso_country: z.string(),
        start_channel_logical_number: z.number(),
        start_channel_active: z.boolean(),
      }),
    }),
  })
);

export const fetchSettingChannelIconListSetRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingChannelIconListSetRequestBodySchema = z.object({
  bundle: z.object({
    date: z.string(),
    author: z.string(),
    name: z.string(),
    description: z.string(),
    type: z.string(),
    region: z.string(),
    version: z.string(),
  }),
  list: z.array(
    z.object({
      name: z.string().optional(),
      filename: z.string().optional(),
      type: z.string().optional(),
    })
  ),
});

export const fetchSettingChannelIconListSetResponseSchema = createResponseSchema(
  z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Attributes: z.object({
      channel_icons: z.object({
        bundle: z.object({
          date: z.string(),
          author: z.string(),
          name: z.string(),
          description: z.string(),
          type: z.string(),
          region: z.string(),
          version: z.string(),
        }),
        list: z.array(
          z.object({
            name: z.string().optional(),
            filename: z.string().optional(),
            type: z.string().optional(),
          })
        ),
      }),
    }),
  })
);

export const fetchSettingModelNameSetRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingModelNameSetRequestBodySchema = z.object({
  bundle: z.object({
    date: z.string(),
    author: z.string(),
    name: z.string(),
    description: z.string(),
    type: z.string(),
    region: z.string(),
    version: z.string(),
  }),
  dvb: z.array(z.string()),
  atsc: z.array(z.string()),
});

export const fetchSettingModalNameSetResponseSchema = createResponseSchema(
  z.object({
    Attributes: z.object({
      model_names: z.object({
        bundle: z.object({
          date: z.string(),
          author: z.string(),
          name: z.string(),
          description: z.string(),
          type: z.string(),
          region: z.string(),
          version: z.string(),
        }),
        dvb: z.array(z.string()),
        atsc: z.array(z.string()),
      }),
    }),
  })
);

export const fetchSettingAppVersionRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingAppVersionRequestBdoySchema = z.object({
  appVersion: z.string(),
});

export const fetchSettingAppVersionResponseSchema = createResponseSchema(
  z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Attributes: z.object({
      server_information: z.object({
        appVersion: z.string(),
      }),
    }),
  })
);

export const fetchSettingSsaiRenewalRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingSsaiRenewalRequestBodySchema = z.object({
  customerCode: z.string(),
  siName: z.string(),
});

export const fetchSettingSsaiRenewalResponseSchema = createResponseSchema(
  z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Attributes: z.object({
      ssai: z.object({
        customerCode: z.string(),
        siName: z.string(),
      }),
    }),
  })
);

export const fetchSettingSignedURLRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingSignedURLRequestBodySchema = z.object({
  type: z.enum(['video_clip', 'splash_screen', 'tv_configuration', 'fw_update']),
  direction: z.string(),
  files: z.array(z.string()),
});

export const fetchSettingSignedURLResponseSchema = createResponseSchema(
  z.object({
    urls: z.array(
      z.object({
        file: z.string(),
        upload_url: z.string(),
      })
    ),
  })
);

export const fetchSettingIotGroupsListCheckRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingIotGroupsListCheckResponseSchema = createResponseSchema(
  z.array(
    z.object({
      aliases: z.array(
        z.object({
          name: z.string(),
          type: z.string(),
        })
      ),
      description: z.string(),
      name: z.string(),
      scenes: z.array(
        z.object({
          indents: z.string(),
          apply: z.number(),
          name: z.string(),
          icon: z.string(),
          description: z.string(),
          event: z.string(),
          actions: z.array(
            z.object({
              thingAliasName: z.string(),
              thingComponentList: z.string(),
            })
          ),
        })
      ),
    })
  )
);

export const removeSettingIotGroupsRequestPathSchema = businessAndPropertyIdSchema;

export const removeSettingIotGroupsRequestBodySchema = z.object({
  iotgroup_name: z.array(z.string()),
});

export const removeSettingIotGroupsResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingIotGroupCreateRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingIotGroupCreateRequestBodySchema = z.object({
  aliases: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
    })
  ),
  description: z.string(),
  name: z.string(),
  scenes: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      event: z.string(),
      apply: z.number(),
      indents: z.string(),
      description: z.string(),
      actions: z.array(
        z.object({
          thingAliasName: z.string(),
          thingComponentList: z.string(),
        })
      ),
    })
  ),
});

export const fetchSettingIotGroupCreateResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingVoiceIntentRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingVoiceIntentResponseSchema = createResponseSchema(
  z.object({
    data: z.array(
      z.object({
        id: z.string(),
        description: z.string(),
        type: z.string(),
        isUse: z.boolean(),
        action: z.string(),
        attributes: z.array(
          z.object({
            id: z.string().optional(),
            type: z.string().optional(),
            value: z.string().optional(),
            options: z.array(z.string()).optional(),
          })
        ),
      })
    ),
  })
);

export const fetchSettingVoiceIntentSetRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingVoiceIntentSetRequestBodySchema = z.object({
  id: z.string(),
  description: z.string(),
  type: z.string(),
  isUse: z.string(),
  action: z.string(),
  attributes: z.array(
    z.object({
      id: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
      options: z.array(z.string()).optional(),
    })
  ),
});

export const fetchSettingVoiceIntentSetResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingMicCodeRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingMicCodeResponseSchema = createResponseSchema(
  z.object({
    mic_code: z.string(),
    created_at: z.string(),
  })
);

export const fetchSettingMicCodeSetRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingMicCodeSetRequestBodySchema = z.object({
  micCode: z.string(),
});

export const fetchSettingMicCodeSetResponseSchema = createResponseSchema(
  z.object({
    app_id: z.string(),
    mic_code: z.number(),
    created_at: z.string(),
  })
);

export const fetchSettingViewTVChannelsRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingViewTVChannelsResponseSchema = createResponseSchema(
  z.array(
    z.object({
      logicalChannelNumber: z.number(),
      logoFileName: z.string(),
      frequency: z.number(),
      channelMapListing: z.string(),
      channelLabel: z.string(),
      audioType: z.number(),
      streamType: z.number(),
      serviceID: z.number(),
      channelCategory: z.string(),
      encrypted: z.string(),
      type: z.string(),
      plpId: z.number(),
      ipAddress: z.string(),
      videoType: z.string(),
      ipPort: z.number(),
      PCR_PID: z.number(),
      videoPID: z.number(),
      audioPID: z.number(),
      programNumber: z.number(),
      satelliteID: z.number(),
      polarization: z.number(),
      symbolRate: z.number(),
      appID: z.string(),
      url: z.string(),
      channelDescription: z.string(),
      'channelDescription.fi_FI': z.string().optional(),
      major: z.number(),
      minor: z.number(),
      languages: z.string(),
      languagesList: z.array(z.string()),
      defaultEventTitle: z.string(),
      'defaultEventTitle.en_US': z.string().optional(),
    })
  )
);

export const fetchSettingTVChannelCategoryRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingTVChannelCategoryResponseSchema = createResponseSchema(z.record(z.string()));

export const fetchSettingLocaleInfoRenewalPutRequestPathSchema = fetchSettingTvRequestPathSchema;

export const fetchSettingLocaleInfoRenewalPutRequestBodySchema = z.object({
  channels: z.array(
    z.object({
      logicalChannelNumber: z.number(),
      type: z.enum(['RF_MM', 'RF_FREQ', 'DVB_S3', 'ATSC3', 'IP', 'SMART_APP', 'URL', 'LG_CHANNELS']),
      channelCategory: z.string(),
      channelLabel: z.string().optional(),
      appID: z.string().optional(),
      streamType: z.string().optional(),
      encrypted: z.string().optional(),
      logoFileName: z.string().optional(),
      languages: z.array(z.string()).optional(),
      channelDescription: z
        .object({
          en_US: z.string().optional(),
        })
        .optional(),
      channelMapListing: z.string().optional(),
      defaultEventTitle: z
        .object({
          en_US: z.string().optional(),
        })
        .optional(),
      frequency: z.number().optional(),
      serviceID: z.number().optional(),
      plpId: z.number().optional(),
      audioType: z.number().optional(),
      ipAddress: z.string().optional(),
      videoType: z.string().optional(),
      ipPort: z.number().optional(),
      PCR_PID: z.number().optional(),
      videoPID: z.number().optional(),
      audioPID: z.number().optional(),
      programNumber: z.number().optional(),
      major: z.number().optional(),
      minor: z.number().optional(),
    })
  ),
});

export const fetchSettingLocaleInfoRenewalPutResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingLGChannelsListCheckRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingLGChannelsListCheckResponseSchema = createResponseSchema(
  z.array(
    z.object({
      providerId: z.string(),
      playerAppId: z.string(),
      channelId: z.string(),
      channelName: z.string(),
      majorChannelNumber: z.number(),
      minorChannelNumber: z.number(),
      logoUrl: z.string(),
      channelGenreCode: z.string(),
      engChannelGenreName: z.string(),
      enable: z.boolean(),
    })
  )
);

export const fetchSettingLGChannelsListRenewalRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingLGChannelsListRenewalRequestBodySchema = z.object({
  lgChannels: z.array(z.string()),
});

export const fetchSettingLGChannelsListRenewalResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingPropertyItemListRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingPropertyItemListResponseSchema = createResponseSchema(
  z.array(
    z.object({
      has_pick_up: z.boolean(),
      coordinates: z.object({
        lat: z.number(),
        long: z.number(),
      }),
      description: z.object({
        has_pick_up: z.boolean(),
        bestseller: z.boolean(),
        price: z.object({
          description: z.string(),
          values: z.object({
            amount: z.number(),
            special: z
              .object({
                original_price: z.number().optional(),
                savings: z.number().optional(),
              })
              .optional(),
          }),
        }),
        number_of_ratings: z.number(),
        coordinates: z.object({
          lat: z.number(),
          long: z.number(),
        }),
        certified: z.boolean(),
        locations: z.array(
          z.object({
            country: z.string(),
            city: z.string(),
            parent_id: z.number(),
            name: z.string(),
            coordinates: z.object({
              lat: z.number(),
              long: z.number(),
            }),
            root_id: z.number(),
            type: z.string(),
            location_id: z.number(),
            english_name: z.string(),
          })
        ),
        durations: z.array(
          z.object({
            duration: z.number().optional(),
            unit: z.string().optional(),
          })
        ),
        cond_language: z.array(z.string()),
        abstract: z.string(),
        overall_rating: z.number(),
        url: z.string(),
      }),
      cond_language: z.array(z.string()),
      abstract: z.string(),
      title: z.string(),
      url: z.string(),
      itemId: z.number(),
      itemName: z.string(),
      service_type: z.string(),
      bestseller: z.boolean(),
      price: z.object({
        description: z.string(),
        values: z.object({
          amount: z.number(),
          special: z
            .object({
              original_price: z.number().optional(),
              savings: z.number().optional(),
            })
            .optional(),
        }),
      }),
      imageUrls: z.array(z.string()),
      number_of_ratings: z.number(),
      certified: z.boolean(),
      locations: z.array(
        z.object({
          country: z.string(),
          city: z.string(),
          parent_id: z.string(),
          name: z.string(),
          coordinates: z.object({
            lat: z.string(),
            long: z.string(),
          }),
          type: z.string(),
          location_id: z.string(),
          english_name: z.string(),
        })
      ),
      durations: z.array(
        z.object({
          duration: z.number().optional(),
          unit: z.string().optional(),
        })
      ),
      overall_rating: z.number(),
      categoryId: z.number(),
    })
  )
);

export const fetchSettingPropertyItemListCheckRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingPropertyItemListCheckRequestBodySchema = z.object({
  servicePreset: z.array(
    z.object({
      has_pick_up: z.boolean(),
      coordinates: z.object({
        lat: z.number(),
        long: z.number(),
      }),
      description: z.object({
        has_pick_up: z.boolean(),
        bestseller: z.boolean(),
        price: z.object({
          description: z.string(),
          values: z.object({
            amount: z.number(),
            special: z
              .object({
                original_price: z.number().optional(),
                savings: z.number().optional(),
              })
              .optional(),
          }),
        }),
        number_of_ratings: z.number(),
        coordinates: z.object({
          lat: z.number(),
          long: z.number(),
        }),
        certified: z.boolean(),
        locations: z.array(
          z.object({
            country: z.string(),
            city: z.string(),
            parent_id: z.number(),
            name: z.string(),
            coordinates: z.object({
              lat: z.number(),
              long: z.number(),
            }),
            root_id: z.number(),
            type: z.string(),
            location_id: z.number(),
            english_name: z.string(),
          })
        ),
        durations: z.array(
          z.object({
            duration: z.number().optional(),
            unit: z.string().optional(),
          })
        ),
        cond_language: z.array(z.string()),
        abstract: z.string(),
        overall_rating: z.number(),
        url: z.string(),
      }),
      cond_language: z.array(z.string()),
      abstract: z.string(),
      title: z.string(),
      url: z.string(),
      itemId: z.number(),
      itemName: z.string(),
      service_type: z.string(),
      bestseller: z.boolean(),
      price: z.object({
        description: z.string(),
        values: z.object({
          amount: z.number(),
          special: z
            .object({
              original_price: z.number().optional(),
              savings: z.number().optional(),
            })
            .optional(),
        }),
      }),
      imageUrls: z.array(z.string()),
      number_of_ratings: z.number(),
      certified: z.boolean(),
      locations: z.array(
        z.object({
          country: z.string(),
          city: z.string(),
          parent_id: z.string(),
          name: z.string(),
          coordinates: z.object({
            lat: z.string(),
            long: z.string(),
          }),
          type: z.string(),
          location_id: z.string(),
          english_name: z.string(),
        })
      ),
      durations: z.array(
        z.object({
          duration: z.number().optional(),
          unit: z.string().optional(),
        })
      ),
      overall_rating: z.number(),
      categoryId: z.number(),
    })
  ),
});

export const fetchSettingPropertyItemListCheckResponseSchema = createResponseSchema(z.object({}));

export const fetchSetting3rdPartyItemCategoryRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSetting3rdPartyItemCategoryResponseSchema = createResponseSchema(
  z.array(
    z.object({
      create_at: z.string(),
      property_id: z.string(),
      _id: z.string(),
      vendor: z.string(),
      name: z.string(),
      type: z.string(),
      categoryId: z.number(),
      parentId: z.union([z.number(), z.null()]),
    })
  )
);

export const fetchSetting3rdPartyItemListAllRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSetting3rdPartyItemListAllRequestQuerySchema = z.object({
  limit: z.number(),
  offset: z.number(),
});

export const fetchSetting3rdPartyItemListAllResponseSchema = createResponseSchema(
  z.object({
    totalCount: z.number(),
    limit: z.number(),
    items: z.array(
      z.object({
        itemId: z.number(),
        title: z.string(),
        itemName: z.string(),
        categoryId: z.number(),
        imageUrls: z.array(z.string()),
        service_type: z.string(),
        description: z.object({
          cond_language: z.array(z.string()),
          abstract: z.string(),
          bestseller: z.boolean(),
          certified: z.boolean(),
          has_pick_up: z.boolean(),
          overall_rating: z.number(),
          number_of_ratings: z.number(),
          coordinates: z.object({
            lat: z.number(),
            long: z.number(),
          }),
          price: z.object({
            values: z.object({
              amount: z.number(),
              special: z
                .object({
                  original_price: z.number().optional(),
                  savings: z.number().optional(),
                })
                .optional(),
            }),
            description: z.string(),
          }),
          locations: z.array(
            z.object({
              location_id: z.number(),
              type: z.string(),
              name: z.string(),
              english_name: z.string(),
              city: z.string(),
              country: z.string(),
              coordinates: z.object({
                lat: z.number(),
                long: z.number(),
              }),
              parent_id: z.number(),
            })
          ),
          url: z.string(),
          durations: z.array(
            z.object({
              duration: z.number().optional(),
              unit: z.string().optional(),
            })
          ),
        }),
      })
    ),
  })
);

export const fetchSettingItemBuyHistoryRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingItemBuyHistoryResponseSchema = createResponseSchema(
  z.array(
    z.object({
      checkoutUtcDate: z.string(),
      ticketUrl: z.array(z.string()),
      countryIsoCode: z.string(),
      item_id: z.string(),
      salesArea: z.string(),
      title: z.string(),
      partnerShare: z.string(),
      paymentType: z.string(),
      gmv: z.string(),
      updated_at: z.string(),
      travelDate: z.string(),
      validUntil: z.string(),
      locations: z.null(),
      categories: z.string(),
      request_code: z.string(),
      paymentInfo: z.object({
        precouponPrice: z.number(),
        paymentMethod: z.string(),
        paymentCurrency: z.string(),
        invoiceReference: z.string(),
        totalPrice: z.number(),
      }),
      requestId: z.string(),
      pmsStatus: z.string(),
      status: z.string(),
    })
  )
);

export const fetchSettingTVSetupRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingTVSetupResponseSchema = createResponseSchema(
  z.object({
    always_on_power: z.object({
      value: z.string(),
    }),
    checkin: z.object({
      volume: z.string(),
      from: z.string(),
      power: z.string(),
      to: z.string(),
    }),
    installation_menu_password: z.object({
      value: z.string(),
    }),
    tv_max_volume: z.object({
      volume: z.number(),
    }),
    tv_settings_lock: z.object({
      value: z.string(),
    }),
    tv_start_up: z.object({
      volume: z.number(),
    }),
  })
);

export const fetchSettingTVSetupSaveRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingTVSetupSaveRequestBodySchema = z.object({
  always_on_power: z.object({
    value: z.string(),
  }),
  checkin: z.object({
    volume: z.string(),
    from: z.string(),
    power: z.string(),
    to: z.string(),
  }),
  installation_menu_password: z.object({
    value: z.string(),
  }),
  tv_max_volume: z.object({
    volume: z.number(),
  }),
  tv_settings_lock: z.object({
    value: z.string(),
  }),
  tv_start_up: z.object({
    volume: z.number(),
  }),
});

export const fetchSettingTVSetupSaveResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingInstallationMenuPasswordSaveRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingInstallationMenuPasswordSaveRequestBodySchema = z.object({
  installation_menu_password: z.object({
    value: z.string(),
  }),
});

export const fetchSettingInstallationMenuPasswordSaveResponseSchema = createResponseSchema(z.object({}));

export const removeSettingTVSetupResetRequestPathSchema = businessAndPropertyIdSchema;

export const removeSettingTVSetupResetResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingAppTokenRequestPathSchema = businessAndPropertyIdSchema.extend({
  app_id: z.string(),
});

export const fetchSettingAppTokenResponseSchema = createResponseSchema(
  z.object({
    app_id: z.string(),
    app_token: z.string(),
    created_at: z.string(),
  })
);

export const fetchSettingAppTokenAddRequestPathSchema = fetchSettingAppTokenRequestPathSchema;

export const fetchSettingAppTokenAddResponseSchema = createResponseSchema(
  z.object({
    token_id: z.string(),
  })
);

export const removeSettingAppTokenDeleteRequestPathSchema = fetchSettingAppTokenRequestPathSchema;

export const removeSettingAppTokenDeleteResponseSchema = createResponseSchema(z.object({}));

export const fetchSettingTravelServiceRequestPathSchema = businessAndPropertyIdSchema.extend({
  server_type: z.string(),
});

export const fetchSettingTravelServiceResponseSchema = createResponseSchema(
  z.object({
    serviceType: z.string().optional(),
    subscription_id: z.number().optional(),
    port: z.string().optional(),
    auth: z
      .object({
        client_id: z.string().optional(),
        client_secret: z.string().optional(),
      })
      .optional(),
    ServiceName: z.string().optional(),
    prefix: z.string().optional(),
    name: z.string().optional(),
    host: z.string().optional(),
    options: z
      .object({
        country: z.string().optional(),
        billingInfo: z
          .object({
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            cardInfo: z
              .object({
                validThru: z.string().optional(),
                cvc: z.string().optional(),
                holderName: z.string().optional(),
                cardNumber: z.string().optional(),
              })
              .optional(),
            phone: z.string().optional(),
            email: z.string().optional(),
          })
          .optional(),
        latitude: z.string().optional(),
        currency: z.string().optional(),
        language: z.string().optional(),
        radius: z.string().optional(),
        longitude: z.string().optional(),
      })
      .optional(),
    adaptor: z
      .object({
        host: z.string().optional(),
        port: z.string().optional(),
        prefix: z.string().optional(),
        useSSL: z.boolean().optional(),
      })
      .optional(),
    isSSL: z.number().optional(),
    isNotifyEvent: z.boolean().optional(),
  })
);

export const fetchSettingVoiceServerRequestPathSchema = fetchSettingTravelServiceRequestPathSchema;

export const fetchSettingVoiceServerResponseSchema = createResponseSchema(
  z
    .object({
      auth: z
        .object({
          privateKey: z.string().optional(),
          caKey: z.string().optional(),
          certKey: z.string().optional(),
          'x-client-id': z.string().optional(),
          'x-api-key': z.string().optional(),
          channel: z.string().optional(),
          client: z.string().optional(),
          'x-credential-id': z.string().optional(),
        })
        .optional(),
      prefix: z.string().optional(),
      certificateUrl: z.string().optional(),
      type: z.string().optional(),
      isNotifyEvent: z.number().optional(),
      subscription_id: z.number().optional(),
      licenseKey: z.string().optional(),
      ServiceName: z.string().optional(),
      port: z.string().optional(),
      name: z.string().optional(),
      host: z.string().optional(),
      msgBroker: z
        .object({
          host: z.string().optional(),
          port: z.number().optional(),
          prefix: z.string().optional(),
          isSSL: z.number().optional(),
        })
        .optional(),
      isSSL: z.string().optional(),
    })
    .optional()
);

export const fetchSettingLGChannelsServerInfoRequestPathSchema = fetchSettingTravelServiceRequestPathSchema;

export const fetchSettingLGChannelsServerInfoResponseSchema = createResponseSchema(
  z.object({
    name: z.string(),
    ServiceName: z.string(),
    lgChannelsDataSourceSettings: z.object({
      password: z.string(),
      fileSize: z.number(),
      host: z.string(),
      directory: z.string(),
      user: z.string(),
      lastFetch: z.string(),
      downloadSummary: z.string(),
    }),
  })
);

export const fetchSettingEPGServerInfoRequestPathSchema = fetchSettingTravelServiceRequestPathSchema;

export const fetchSettingEPGServerInfoResponseSchema = createResponseSchema(
  z.object({
    name: z.string(),
    ServiceName: z.string(),
    epgDataSourceSettings: z.object({
      password: z.string(),
      hours: z.string(),
      host: z.string(),
      directory: z.string(),
      user: z.string(),
      lastFetch: z.string(),
      downloadSummary: z.string(),
    }),
  })
);

export const fetchSettingRoomControlDeviceInfoRequestPathSchema = fetchSettingTravelServiceRequestPathSchema;

export const fetchSettingRoomControlDeviceInfoResponseSchema = createResponseSchema(
  z.object({
    name: z.string(),
    description: z.string(),
    aliases: z.array(
      z.object({
        name: z.string(),
        type: z.string(),
      })
    ),
    scenes: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        event: z.string(),
        apply: z.string(),
        intents: z.array(z.string()),
        description: z.string(),
        actions: z.array(
          z.object({
            thingAliasName: z.string(),
            thingComponentList: z.array(
              z.object({
                componentId: z.string(),
                componentValue: z.array(
                  z.object({
                    additionalValue: z.string(),
                    value: z.string(),
                    valueType: z.string(),
                  })
                ),
              })
            ),
          })
        ),
      })
    ),
  })
);

export const fetchSettingS3EPGCheckRequestPathSchema = fetchSettingTravelServiceRequestPathSchema;

export const fetchSettingS3EPGCheckResponseSchema = createResponseSchema(
  z.object({
    jsonUrl: z.string(),
    txtUrl: z.string(),
  })
);

export const fetchSettingServerStateRequestPathSchema = businessAndPropertyIdSchema;

export const fetchSettingServerStateResponseSchema = createResponseSchema(
  z.object({
    data: z.object({
      paychannelServer: z.boolean(),
      paychannelStatus: z.boolean(),
      voiceServer: z.boolean(),
      voiceStatus: z.boolean(),
      roomcontrolServer: z.boolean(),
      roomcontrolStatus: z.boolean(),
      travelserviceServer: z.boolean(),
      travelserviceStatus: z.boolean(),
      qmsServer: z.boolean(),
      qmsStatus: z.boolean(),
      cloudServer: z.boolean(),
      cloudStatus: z.boolean(),
      pmsServer: z.boolean(),
      pmsStatus: z.boolean(),
    }),
  })
);

export type FetchSettingTvRequestPath = z.infer<typeof fetchSettingTvRequestPathSchema>;
export type FetchSettingTvResponse = z.infer<typeof fetchSettingTvResponseSchema>;
export type FetchSettingLocaleRequestPath = z.infer<typeof fetchSettingLocaleRequestPathSchema>;
export type FetchSettingLocaleResponse = z.infer<typeof fetchSettingLocaleResponseSchema>;
export type FetchSettingChannelIconListRequestPath = z.infer<typeof fetchSettingChannelIconListRequestPathSchema>;
export type FetchSettingChannelIconListResponse = z.infer<typeof fetchSettingChannelIconListResponseSchema>;
export type FetchSettingSmartAppsRequestPath = z.infer<typeof fetchSettingSmartAppsRequestPathSchema>;
export type FetchSettingSmartAppsResponse = z.infer<typeof fetchSettingSmartAppsResponseSchema>;
export type FetchSettingVideoClipListRequestPath = z.infer<typeof fetchSettingVideoClipListRequestPathSchema>;
export type FetchSettingVideoClipListResponse = z.infer<typeof fetchSettingVideoClipListResponseSchema>;
export type FetchSettingModelNameRequestPath = z.infer<typeof fetchSettingModelNameRequestPathSchema>;
export type FetchSettingModelNameResponse = z.infer<typeof fetchSettingModelNameResponseSchema>;
export type FetchSettingSsaiRequestPath = z.infer<typeof fetchSettingSsaiRequestPathSchema>;
export type FetchSettingSsaiResponse = z.infer<typeof fetchSettingSsaiResponseSchema>;
export type FetchSettingTvEditRequestPath = z.infer<typeof fetchSettingTvEditRequestPathSchema>;
export type FetchSettingTvEditRequestBody = z.infer<typeof fetchSettingTvEditRequestBodySchema>;
export type FetchSettingTvEditResponse = z.infer<typeof fetchSettingTvEditResponseSchema>;
export type FetchSettingLocaleInfoRenewalRequestPath = z.infer<typeof fetchSettingLocaleInfoRenewalRequestPathSchema>;
export type FetchSettingLocaleInfoRenewalRequestBody = z.infer<typeof fetchSettingLocaleInfoRenewalRequestBodySchema>;
export type FetchSettingLocaleInfoRenewalResponse = z.infer<typeof fetchSettingLocaleInfoRenewalResponseSchema>;
export type FetchSettingChannelIconListSetRequestPath = z.infer<typeof fetchSettingChannelIconListSetRequestPathSchema>;
export type FetchSettingChannelIconListSetRequestBody = z.infer<typeof fetchSettingChannelIconListSetRequestBodySchema>;
export type FetchSettingChannelIconListSetResponse = z.infer<typeof fetchSettingChannelIconListSetResponseSchema>;
export type FetchSettingModelNameSetRequestPath = z.infer<typeof fetchSettingModelNameSetRequestPathSchema>;
export type FetchSettingModelNameSetRequestBody = z.infer<typeof fetchSettingModelNameSetRequestBodySchema>;
export type FetchSettingModalNameSetResponse = z.infer<typeof fetchSettingModalNameSetResponseSchema>;
export type FetchSettingAppVersionRequestPath = z.infer<typeof fetchSettingAppVersionRequestPathSchema>;
export type FetchSettingAppVersionRequestBdoy = z.infer<typeof fetchSettingAppVersionRequestBdoySchema>;
export type FetchSettingAppVersionResponse = z.infer<typeof fetchSettingAppVersionResponseSchema>;
export type FetchSettingSsaiRenewalRequestPath = z.infer<typeof fetchSettingSsaiRenewalRequestPathSchema>;
export type FetchSettingSsaiRenewalRequestBody = z.infer<typeof fetchSettingSsaiRenewalRequestBodySchema>;
export type FetchSettingSsaiRenewalResponse = z.infer<typeof fetchSettingSsaiRenewalResponseSchema>;
export type FetchSettingSignedURLRequestPath = z.infer<typeof fetchSettingSignedURLRequestPathSchema>;
export type FetchSettingSignedURLRequestBody = z.infer<typeof fetchSettingSignedURLRequestBodySchema>;
export type FetchSettingSignedURLResponse = z.infer<typeof fetchSettingSignedURLResponseSchema>;
export type FetchSettingIotGroupsListCheckRequestPath = z.infer<typeof fetchSettingIotGroupsListCheckRequestPathSchema>;
export type FetchSettingIotGroupsListCheckResponse = z.infer<typeof fetchSettingIotGroupsListCheckResponseSchema>;
export type RemoveSettingIotGroupsRequestPath = z.infer<typeof removeSettingIotGroupsRequestPathSchema>;
export type RemoveSettingIotGroupsRequestBody = z.infer<typeof removeSettingIotGroupsRequestBodySchema>;
export type RemoveSettingIotGroupsResponse = z.infer<typeof removeSettingIotGroupsResponseSchema>;
export type FetchSettingIotGroupCreateRequestPath = z.infer<typeof fetchSettingIotGroupCreateRequestPathSchema>;
export type FetchSettingIotGroupCreateRequestBody = z.infer<typeof fetchSettingIotGroupCreateRequestBodySchema>;
export type FetchSettingIotGroupCreateResponse = z.infer<typeof fetchSettingIotGroupCreateResponseSchema>;
export type FetchSettingVoiceIntentRequestPath = z.infer<typeof fetchSettingVoiceIntentRequestPathSchema>;
export type FetchSettingVoiceIntentResponse = z.infer<typeof fetchSettingVoiceIntentResponseSchema>;
export type FetchSettingVoiceIntentSetRequestPath = z.infer<typeof fetchSettingVoiceIntentSetRequestPathSchema>;
export type FetchSettingVoiceIntentSetRequestBody = z.infer<typeof fetchSettingVoiceIntentSetRequestBodySchema>;
export type FetchSettingVoiceIntentSetResponse = z.infer<typeof fetchSettingVoiceIntentSetResponseSchema>;
export type FetchSettingMicCodeRequestPath = z.infer<typeof fetchSettingMicCodeRequestPathSchema>;
export type FetchSettingMicCodeResponse = z.infer<typeof fetchSettingMicCodeResponseSchema>;
export type FetchSettingMicCodeSetRequestPath = z.infer<typeof fetchSettingMicCodeSetRequestPathSchema>;
export type FetchSettingMicCodeSetRequestBody = z.infer<typeof fetchSettingMicCodeSetRequestBodySchema>;
export type FetchSettingMicCodeSetResponse = z.infer<typeof fetchSettingMicCodeSetResponseSchema>;
export type FetchSettingViewTVChannelsRequestPath = z.infer<typeof fetchSettingViewTVChannelsRequestPathSchema>;
export type FetchSettingViewTVChannelsResponse = z.infer<typeof fetchSettingViewTVChannelsResponseSchema>;
export type FetchSettingTVChannelCategoryRequestPath = z.infer<typeof fetchSettingTVChannelCategoryRequestPathSchema>;
export type FetchSettingTVChannelCategoryResponse = z.infer<typeof fetchSettingTVChannelCategoryResponseSchema>;
export type FetchSettingLocaleInfoRenewalPutRequestPath = z.infer<typeof fetchSettingLocaleInfoRenewalPutRequestPathSchema>;
export type FetchSettingLocaleInfoRenewalPutRequestBody = z.infer<typeof fetchSettingLocaleInfoRenewalPutRequestBodySchema>;
export type FetchSettingLocaleInfoRenewalPutResponse = z.infer<typeof fetchSettingLocaleInfoRenewalPutResponseSchema>;
export type FetchSettingLGChannelsListCheckRequestPath = z.infer<typeof fetchSettingLGChannelsListCheckRequestPathSchema>;
export type FetchSettingLGChannelsListCheckResponse = z.infer<typeof fetchSettingLGChannelsListCheckResponseSchema>;
export type FetchSettingLGChannelsListRenewalRequestPath = z.infer<typeof fetchSettingLGChannelsListRenewalRequestPathSchema>;
export type FetchSettingLGChannelsListRenewalRequestBody = z.infer<typeof fetchSettingLGChannelsListRenewalRequestBodySchema>;
export type FetchSettingLGChannelsListRenewalResponse = z.infer<typeof fetchSettingLGChannelsListRenewalResponseSchema>;
export type FetchSettingPropertyItemListRequestPath = z.infer<typeof fetchSettingPropertyItemListRequestPathSchema>;
export type FetchSettingPropertyItemListResponse = z.infer<typeof fetchSettingPropertyItemListResponseSchema>;
export type FetchSettingPropertyItemListCheckRequestPath = z.infer<typeof fetchSettingPropertyItemListCheckRequestPathSchema>;
export type FetchSettingPropertyItemListCheckRequestBody = z.infer<typeof fetchSettingPropertyItemListCheckRequestBodySchema>;
export type FetchSettingPropertyItemListCheckResponse = z.infer<typeof fetchSettingPropertyItemListCheckResponseSchema>;
export type FetchSetting3rdPartyItemCategoryRequestPath = z.infer<typeof fetchSetting3rdPartyItemCategoryRequestPathSchema>;
export type FetchSetting3rdPartyItemCategoryResponse = z.infer<typeof fetchSetting3rdPartyItemCategoryResponseSchema>;
export type FetchSetting3rdPartyItemListAllRequestPath = z.infer<typeof fetchSetting3rdPartyItemListAllRequestPathSchema>;
export type FetchSetting3rdPartyItemItemListAllRequestQuery = z.infer<typeof fetchSetting3rdPartyItemListAllRequestQuerySchema>;
export type FetchSetting3rdPartyItemListAllResponse = z.infer<typeof fetchSetting3rdPartyItemListAllResponseSchema>;
export type FetchSettingItemBuyHistoryRequestPath = z.infer<typeof fetchSettingItemBuyHistoryRequestPathSchema>;
export type FetchSettingItemBuyHistoryResponse = z.infer<typeof fetchSettingItemBuyHistoryResponseSchema>;
export type FetchSettingTVSetupRequestPath = z.infer<typeof fetchSettingTVSetupRequestPathSchema>;
export type FetchSettingTVSetupResponse = z.infer<typeof fetchSettingTVSetupResponseSchema>;
export type FetchSettingTVSetupSaveRequestPath = z.infer<typeof fetchSettingTVSetupSaveRequestPathSchema>;
export type FetchSettingTVSetupSaveRequestBody = z.infer<typeof fetchSettingTVSetupSaveRequestBodySchema>;
export type FetchSettingTVSetupSaveResponse = z.infer<typeof fetchSettingTVSetupSaveResponseSchema>;
export type FetchSettingInstallationMenuPasswordSaveRequestPath = z.infer<typeof fetchSettingInstallationMenuPasswordSaveRequestPathSchema>;
export type FetchSettingInstallationMenuPasswordSaveRequestBody = z.infer<typeof fetchSettingInstallationMenuPasswordSaveRequestBodySchema>;
export type FetchSettingInstallationMenuPasswordSaveResponse = z.infer<typeof fetchSettingInstallationMenuPasswordSaveResponseSchema>;
export type RemoveSettingTVSetupResetRequestPath = z.infer<typeof removeSettingTVSetupResetRequestPathSchema>;
export type RemoveSettingTVSetupResetResponse = z.infer<typeof removeSettingTVSetupResetResponseSchema>;
export type FetchSettingAppTokenRequestPath = z.infer<typeof fetchSettingAppTokenRequestPathSchema>;
export type FetchSettingAppTokenResponse = z.infer<typeof fetchSettingAppTokenResponseSchema>;
export type FetchSettingAppTokenAddRequestPath = z.infer<typeof fetchSettingAppTokenAddRequestPathSchema>;
export type FetchSettingAppTokenAddResponse = z.infer<typeof fetchSettingAppTokenAddResponseSchema>;
export type RemoveSettingAppTokenDeleteRequestPath = z.infer<typeof removeSettingAppTokenDeleteRequestPathSchema>;
export type RemoveSettingAppTokenDeleteResponse = z.infer<typeof removeSettingAppTokenDeleteResponseSchema>;
export type FetchSettingTravelServiceRequestPath = z.infer<typeof fetchSettingTravelServiceRequestPathSchema>;
export type FetchSettingTravelServiceResponse = z.infer<typeof fetchSettingTravelServiceResponseSchema>;
export type FetchSettingVoiceServerRequestPath = z.infer<typeof fetchSettingVoiceServerRequestPathSchema>;
export type FetchSettingVoiceServerResponse = z.infer<typeof fetchSettingVoiceServerResponseSchema>;
export type FetchSettingLGChannelsServerInfoRequestPath = z.infer<typeof fetchSettingLGChannelsServerInfoRequestPathSchema>;
export type FetchSettingLGChannelsServerInfoResponse = z.infer<typeof fetchSettingLGChannelsServerInfoResponseSchema>;
export type FetchSettingEPGServerInfoRequestPath = z.infer<typeof fetchSettingEPGServerInfoRequestPathSchema>;
export type FetchSettingEPGServerInfoResponse = z.infer<typeof fetchSettingEPGServerInfoResponseSchema>;
export type FetchSettingRoomControlDeviceInfoRequestPath = z.infer<typeof fetchSettingRoomControlDeviceInfoRequestPathSchema>;
export type FetchSettingRoomControlDeviceInfoResponse = z.infer<typeof fetchSettingRoomControlDeviceInfoResponseSchema>;
export type FetchSettingS3EPGCheckRequestPath = z.infer<typeof fetchSettingS3EPGCheckRequestPathSchema>;
export type FetchSettingS3EPGCheckResponse = z.infer<typeof fetchSettingS3EPGCheckResponseSchema>;
export type FetchSettingServerStateRequestPath = z.infer<typeof fetchSettingServerStateRequestPathSchema>;
export type FetchSettingServerStateResponse = z.infer<typeof fetchSettingServerStateResponseSchema>;
