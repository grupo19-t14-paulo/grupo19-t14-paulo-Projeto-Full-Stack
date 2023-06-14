import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAdvertsController,
  retriveAnnouncementController,
  updateAnnouncementController,
} from "../controllers/adverts.controllers";
import { tokenVerifyMiddleware } from "../middlewares/ensureTokenValid.middleware";

const adverstsRoutes = Router();

adverstsRoutes.get("", listAdvertsController);
adverstsRoutes.get("/:id", retriveAnnouncementController);
adverstsRoutes.use(tokenVerifyMiddleware)
adverstsRoutes.post("", createAnnouncementController);
adverstsRoutes.patch("/:id", updateAnnouncementController);
adverstsRoutes.delete("/:id", deleteAnnouncementController);

export default adverstsRoutes;
