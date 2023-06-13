import { z } from "zod";
import { FuelCar } from "../entities/adverts.entity";
import { imageSchemaRequest } from "./images.schema";

const announcementSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.nativeEnum(FuelCar),
  mileage: z.string(),
  color: z.string(),
  value: z.number(),
  price: z.number(),
  description: z.string(),
  active: z.boolean(),
  images: z.array(imageSchemaRequest).optional().default([]),
});

const announcementSchemaRequest = announcementSchema.omit({
  id: true,
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
};
