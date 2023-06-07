import { z } from "zod";

const imageSchema = z.object({
  id: z.string(),
  image: z.string(),
});

const imageSchemaRequest = imageSchema.omit({
  id: true,
});

const imagesSchemaResponse = z.array(imageSchema);

export { imageSchema, imageSchemaRequest, imagesSchemaResponse };
