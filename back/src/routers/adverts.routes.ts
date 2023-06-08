import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAdvertsController,
  retriveAnnouncementController,
  updateAnnouncementController,
} from "../controllers/adverts.controllers";

const adverstsRoutes = Router();

adverstsRoutes.post("", createAnnouncementController);
adverstsRoutes.get("", listAdvertsController);
adverstsRoutes.get("/:id", retriveAnnouncementController);
adverstsRoutes.patch("/:id", updateAnnouncementController);
adverstsRoutes.delete("/:id", deleteAnnouncementController);

export default adverstsRoutes;
