import { Router } from "express";
import {
  createImageController,
  deleteImageController,
  listImagesController,
} from "../controllers/images.controllers";

const imagesRoutes = Router();

imagesRoutes.post("/:id", createImageController);
imagesRoutes.get("/:id", listImagesController);
imagesRoutes.delete("/:id", deleteImageController);

export default imagesRoutes;
