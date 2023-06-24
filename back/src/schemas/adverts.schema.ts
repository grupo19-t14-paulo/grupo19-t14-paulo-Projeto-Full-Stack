import { z } from "zod";
import { FuelCar } from "../entities/adverts.entity";
import { imageSchemaRequest } from "./images.schema";
import { returnUserSchema } from "./users.schema";

const announcementSchema = z.object({
  id: z.string(),
  brand: z.string().min(2).max(127),
  model: z.string().min(2).max(127),
  year: z.string().min(2).max(4),
  fuel: z.nativeEnum(FuelCar),
  mileage: z.number(),
  color: z.string().max(50),
  value: z.number(),
  price: z.number(),
  description: z.string(),
  active: z.boolean(),
  images: z.array(imageSchemaRequest).optional().default([]),
});

const announcementSchemaRequest = announcementSchema.omit({
  id: true,
});

const announcementWithUserSchema = announcementSchema.extend({
  user: returnUserSchema,
});

const announcementSchemaUpdate = announcementSchema
  .omit({
    id: true,
  })
  .partial();

const advertsSchemaResponse = z.array(announcementSchema);

export {
  announcementSchema,
  announcementSchemaRequest,
  advertsSchemaResponse,
  announcementSchemaUpdate,
  announcementWithUserSchema,
};
