import { z } from "zod";
import {
  imageSchema,
  imageSchemaRequest,
  imagesSchemaResponse,
} from "../schemas/images.schema";

type IImage = z.infer<typeof imageSchema>;
type IImageRequest = z.infer<typeof imageSchemaRequest>;
type IImageResponse = z.infer<typeof imagesSchemaResponse>;

export { IImage, IImageRequest, IImageResponse };
