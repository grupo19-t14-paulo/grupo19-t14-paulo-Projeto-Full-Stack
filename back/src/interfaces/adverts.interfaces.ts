import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
    announcementSchema,
    announcementSchemaRequest,
    advertsSchemaResponse,
    announcementWithUserSchema,
} from "../schemas/adverts.schema";

type IAnnouncement = z.infer<typeof announcementSchema>;
type IAnnouncementRequest = z.infer<typeof announcementSchemaRequest>;
type IAnnouncementResponse = z.infer<typeof advertsSchemaResponse>;
type IAnnouncementUpdate = DeepPartial<IAnnouncementRequest>;

type TAnnouncementWithUserSchema = z.infer<typeof announcementWithUserSchema>;

export {
    IAnnouncement,
    IAnnouncementRequest,
    IAnnouncementResponse,
    IAnnouncementUpdate,
    TAnnouncementWithUserSchema,
};
