import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  announcementSchema,
  announcementSchemaRequest,
  advertsSchemaResponse,
} from "../schemas/adverts.schema";

type IAnnouncement = z.infer<typeof announcementSchema>;
type IAnnouncementRequest = z.infer<typeof announcementSchemaRequest>;
type IAnnouncementResponse = z.infer<typeof advertsSchemaResponse>;
type IAnnouncementUpdate = DeepPartial<IAnnouncementRequest>;

export {
  IAnnouncement,
  IAnnouncementRequest,
  IAnnouncementResponse,
  IAnnouncementUpdate,
};
