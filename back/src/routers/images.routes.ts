import { Router } from "express";
import {
  createImageController,
  deleteImageController,
  listImagesController,
} from "../controllers/images.controllers";
import { tokenVerifyMiddleware } from "../middlewares/ensureTokenValid.middleware";

const imagesRoutes = Router();

imagesRoutes.get("/:id", listImagesController);
imagesRoutes.use(tokenVerifyMiddleware)
imagesRoutes.post("/:id", createImageController);
imagesRoutes.delete("/:id", deleteImageController);

export default imagesRoutes;
