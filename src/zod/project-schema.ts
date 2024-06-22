import { z } from 'zod';
import { businessAndPropertyIdSchema, createResponseSchema } from './common-schema';

export const fetchProjectsRequestPathSchema = businessAndPropertyIdSchema;

export const fetchProjectsResponseSchema = createResponseSchema(
  z.object({
    projects: z.array(
      z.object({
        is_template: z.number(),
        media: z.object({
          image: z.array(z.string()),
          font: z.array(z.string()),
          music: z.array(z.string()),
        }),
        property_id: z.string(),
        project: z.object({
          project_id: z.string(),
          deployment_group: z.array(z.string()),
          is_deployed: z.number(),
          theme_id: z.number(),
          name: z.string(),
          modified_by: z.string(),
          created_date: z.number(),
          deployed_date: z.string(),
          modified_date: z.number(),
          resolution: z.string(),
          page_size: z.object({
            x: z.string(),
            y: z.string(),
          }),
        }),
        content_id: z.string().nullable(),
        project_id: z.string(),
        project_settings: z.object({
          guideKeyMapping: z.object({
            type: z.string(),
            channel: z.string().optional(),
            pageId: z.string().optional(),
            pageName: z.string().optional(),
          }),
          sound: z.string(),
          music_file: z.string().optional(),
          hidePortal: z.string(),
          key_mapping_name: z.string(),
          key_mapping: z.string(),
          broadcast_type: z.string(),
          channels: z.array(
            z.object({
              channelLabel: z.string(),
              videoType: z.number(),
              audioType: z.number(),
              logicalChannelNumber: z.number(),
              ipAddress: z.string(),
              channelCategory: z.string(),
              type: z.string(),
              channelMapListing: z.string(),
              videoPID: z.number(),
              streamType: z.number(),
              encrypted: z.string(),
              ipPort: z.number(),
              programNumber: z.number(),
              PCR_PID: z.number(),
              audioPID: z.number(),
            })
          ),
        }),
        video_clips: z.array(z.string()),
      })
    ),
  })
);

export const fetchProjectRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const fetchProjectResponseSchema = createResponseSchema(
  z.object({
    projects: z.object({
      is_template: z.number(),
      media: z.object({
        image: z.array(z.string()),
        font: z.array(z.string()),
        music: z.array(z.string()),
      }),
      property_id: z.string(),
      project: z.object({
        project_id: z.string(),
        deployment_group: z.array(z.string()),
        is_deployed: z.number(),
        theme_id: z.number(),
        name: z.string(),
        modified_by: z.string(),
        created_date: z.number(),
        deployed_date: z.string(),
        modified_date: z.number(),
        resolution: z.string(),
        page_size: z.object({
          x: z.string(),
          y: z.string(),
        }),
      }),
      content_id: z.string().nullable(),
      project_settings: z.object({
        guideKeyMapping: z.object({
          type: z.string(),
          channel: z.string().optional(),
          pageId: z.string().optional(),
          pageName: z.string().optional(),
        }),
        sound: z.string(),
        music_file: z.string().optional(),
        hidePortal: z.string(),
        key_mapping_name: z.string(),
        key_mapping: z.string(),
        broadcast_type: z.string(),
        channels: z.array(
          z.object({
            channelLabel: z.string(),
            videoType: z.number(),
            audioType: z.number(),
            logicalChannelNumber: z.number(),
            ipAddress: z.string(),
            channelCategory: z.string(),
            type: z.string(),
            channelMapListing: z.string(),
            videoPID: z.number(),
            streamType: z.number(),
            encrypted: z.string(),
            ipPort: z.number(),
            programNumber: z.number(),
            PCR_PID: z.number(),
            audioPID: z.number(),
          })
        ),
      }),
      widgets: z.string(),
      project_id: z.string(),
      video_clips: z.array(z.string()),
      pages: z.array(
        z.object({
          is_guide: z.string(),
          init_focus_element: z.string(),
          is_deletable: z.number(),
          parent_page_id: z.number(),
          back_button_page: z.string(),
          sort: z.number(),
          type: z.string(),
          url: z.string(),
          page_id: z.string(),
          filename: z.string(),
          speech_element: z.string(),
          project_id: z.string(),
          background: z.object({
            background_transition: z.string(),
            background_image_id: z.string(),
            background_image_stretch: z.string(),
            background_color: z.string(),
            background_image_top: z.string(),
            background_image_left: z.string(),
            background_repeat: z.string(),
            opacity: z.string(),
            url: z.string(),
          }),
          iot_type: z.string(),
        })
      ),
    }),
  })
);

export const fetchProjectActivityRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const fetchProjectActivityResponseSchema = createResponseSchema(
  z.object({
    editorActivity: z.array(
      z.object({
        property_id: z.string(),
        ttl: z.number(),
        user_id: z.string(),
        project_id: z.string(),
        activity_id: z.number(),
      })
    ),
  })
);

export const fetchUserActivityRequestPathSchema = businessAndPropertyIdSchema.extend({
  user_id: z.string(),
});

export const fetchUserActivityResponseSchema = createResponseSchema(
  z.object({
    editorActivity: z.array(
      z.object({
        property_id: z.string(),
        ttl: z.number(),
        user_id: z.string(),
        project_id: z.string(),
        activity_id: z.number(),
      })
    ),
  })
);

export const createProjectRequestPathSchema = businessAndPropertyIdSchema;

export const createProjectRequestBodySchema = z.object({
  project_name: z.string(),
});

export const createProjectResponseSchema = createResponseSchema(
  z.object({
    project_id: z.string(),
  })
);

export const cloneProjectRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const cloneProjectRequestBodySchema = z.object({
  projects: z.object({
    is_template: z.number(),
    media: z.object({
      image: z.array(z.string()),
      font: z.array(z.string()),
      music: z.array(z.string()),
    }),
    project: z.object({
      project_id: z.string(),
      deployment_group: z.array(z.string()),
      is_deployed: z.number(),
      theme_id: z.number(),
      name: z.string(),
      modified_by: z.string(),
      created_date: z.number(),
      deployed_date: z.string(),
      modified_date: z.number(),
      resolution: z.string(),
      page_size: z.object({
        x: z.string(),
        y: z.string(),
      }),
    }),
    project_settings: z.object({
      guideKeyMapping: z.object({
        type: z.string(),
        channel: z.string().optional(),
        pageId: z.string().optional(),
        pageName: z.string().optional(),
      }),
      sound: z.string(),
      music_file: z.string().optional(),
      hidePortal: z.string(),
      key_mapping_name: z.string(),
      key_mapping: z.string().optional(),
      broadcast_type: z.string(),
    }),
    widgets: z.string().optional(),
    video_clips: z.array(z.string()).optional(),
    pages: z.array(
      z.object({
        is_guide: z.string(),
        init_focus_element: z.string(),
        is_deletable: z.number(),
        parent_page_id: z.number(),
        back_button_page: z.string(),
        sort: z.number(),
        type: z.string(),
        url: z.string(),
        page_id: z.string(),
        filename: z.string(),
        speech_element: z.string(),
        project_id: z.string(),
        background: z.object({
          background_transition: z.string(),
          background_image_id: z.string(),
          background_image_stretch: z.string(),
          background_color: z.string(),
          background_image_top: z.string(),
          background_image_left: z.string(),
          background_repeat: z.string(),
          opacity: z.string(),
          url: z.string(),
        }),
        iot_type: z.string(),
      })
    ),
  }),
  project_name: z.string(),
});

export const cloneProjectResponseSchema = createResponseSchema(
  z.object({
    project_data: z.object({
      is_template: z.number(),
      media: z.object({
        image: z.array(z.string()),
        font: z.array(z.string()),
        music: z.array(z.string()),
      }),
      property_id: z.string(),
      project: z.object({
        project_id: z.string(),
        deployment_group: z.array(z.string()),
        is_deployed: z.number(),
        theme_id: z.number(),
        name: z.string(),
        modified_by: z.string(),
        created_date: z.number(),
        deployed_date: z.string(),
        modified_date: z.number(),
        resolution: z.string(),
        page_size: z.object({
          x: z.string(),
          y: z.string(),
        }),
      }),
      project_settings: z.object({
        guideKeyMapping: z.object({
          type: z.string(),
          channel: z.string().optional(),
          pageId: z.string().optional(),
          pageName: z.string().optional(),
        }),
        sound: z.string(),
        music_file: z.string().optional(),
        hidePortal: z.string(),
        key_mapping_name: z.string(),
        key_mapping: z.string().optional(),
        broadcast_type: z.string(),
      }),
      widgets: z.string().optional(),
      video_clips: z.array(z.string()).optional(),
      pages: z.array(
        z.object({
          is_guide: z.string(),
          init_focus_element: z.string(),
          is_deletable: z.number(),
          parent_page_id: z.number(),
          back_button_page: z.string(),
          sort: z.number(),
          type: z.string(),
          url: z.string(),
          page_id: z.string(),
          filename: z.string(),
          speech_element: z.string(),
          project_id: z.string(),
          background: z.object({
            background_transition: z.string(),
            background_image_id: z.string(),
            background_image_stretch: z.string(),
            background_color: z.string(),
            background_image_top: z.string(),
            background_image_left: z.string(),
            background_repeat: z.string(),
            opacity: z.string(),
            url: z.string(),
          }),
          iot_type: z.string(),
        })
      ),
    }),
    project_id: z.string(),
  })
);

export const updateProjectActivityRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const updateProjectActivityRequestBodySchema = z.object({
  user_id: z.string(),
});

export const updateProjectActivityResponseSchema = createResponseSchema(
  z.object({
    result: z.string(),
  })
);

export const updateProjectRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const updateProjectRequestBodySchema = z.object({
  project: z.object({
    is_template: z.number(),
    media: z.object({
      image: z.array(z.string()),
      font: z.array(z.string()),
      music: z.array(z.string()),
    }),
    project: z.object({
      project_id: z.string(),
      deployment_group: z.array(z.string()),
      is_deployed: z.number(),
      theme_id: z.number(),
      name: z.string(),
      modified_by: z.string(),
      created_date: z.number(),
      deployed_date: z.string(),
      modified_date: z.number(),
      resolution: z.string(),
      page_size: z.object({
        x: z.string(),
        y: z.string(),
      }),
    }),
    widgets: z.string(),
    project_settings: z.object({
      guideKeyMapping: z.object({
        type: z.string(),
        channel: z.string(),
        pageId: z.string(),
        pageName: z.string(),
      }),
      sound: z.string(),
      music_file: z.string(),
      hidePortal: z.string(),
      key_mapping_name: z.string(),
      key_mapping: z.string(),
      broadcast_type: z.string(),
    }),
    video_clips: z.array(z.string()),
    pages: z.array(
      z.object({
        is_guide: z.string(),
        init_focus_element: z.string(),
        is_deletable: z.number(),
        parent_page_id: z.number(),
        back_button_page: z.string(),
        sort: z.number(),
        type: z.string(),
        url: z.string(),
        page_id: z.string(),
        filename: z.string(),
        speech_element: z.string(),
        project_id: z.string(),
        background: z.object({
          background_transition: z.string(),
          background_image_id: z.string(),
          background_image_stretch: z.string(),
          background_color: z.string(),
          background_image_top: z.string(),
          background_image_left: z.string(),
          background_repeat: z.string(),
          opacity: z.string(),
          url: z.string(),
        }),
        iot_type: z.string(),
      })
    ),
  }),
});

export const updateProjectResponseSchema = createResponseSchema(
  z.object({
    result: z.object({}),
  })
);

export const deleteProjectRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const deleteProjectResponseSchema = createResponseSchema(z.object({}));

export const deleteActivityRequestPathSchema = businessAndPropertyIdSchema.extend({
  project_id: z.string(),
});

export const deleteActivityResponseSchema = createResponseSchema(z.object({}));

export type FetchProjectsRequestPath = z.infer<typeof fetchProjectsRequestPathSchema>;
export type FetchProjectsResponse = z.infer<typeof fetchProjectsResponseSchema>;
export type FetchProjectRequestPath = z.infer<typeof fetchProjectRequestPathSchema>;
export type FetchProjectResponse = z.infer<typeof fetchProjectResponseSchema>;
export type FetchProjectActivityRequestPath = z.infer<typeof fetchProjectActivityRequestPathSchema>;
export type FetchProjectActivityResponse = z.infer<typeof fetchProjectActivityResponseSchema>;
export type FetchUserActivityRequestPath = z.infer<typeof fetchUserActivityRequestPathSchema>;
export type FetchUserActivityResponse = z.infer<typeof fetchUserActivityResponseSchema>;
export type CreateProjectRequestPath = z.infer<typeof createProjectRequestPathSchema>;
export type CreateProjectRequest = z.infer<typeof createProjectRequestBodySchema>;
export type CreateProjectResponse = z.infer<typeof createProjectResponseSchema>;
export type CloneProjectRequestPath = z.infer<typeof cloneProjectRequestPathSchema>;
export type CloneProjectRequestBody = z.infer<typeof cloneProjectRequestBodySchema>;
export type CloneProjectResponse = z.infer<typeof cloneProjectResponseSchema>;
export type UpdateProjectActivityRequestPath = z.infer<typeof updateProjectActivityRequestPathSchema>;
export type UpdateProjectActivityRequestBody = z.infer<typeof updateProjectActivityRequestBodySchema>;
export type UpdateProjectActivityResponse = z.infer<typeof updateProjectActivityResponseSchema>;
export type UpdateProjectRequestPath = z.infer<typeof updateProjectRequestPathSchema>;
export type UpdateProjectRequestBody = z.infer<typeof updateProjectRequestBodySchema>;
export type UpdateProjectResponse = z.infer<typeof updateProjectResponseSchema>;
export type DeleteProjectRequestPath = z.infer<typeof deleteProjectRequestPathSchema>;
export type DeleteProjectResponse = z.infer<typeof deleteProjectResponseSchema>;
export type DeleteActivityRequestPath = z.infer<typeof deleteActivityRequestPathSchema>;
export type DeleteActivityResponse = z.infer<typeof deleteActivityResponseSchema>;
