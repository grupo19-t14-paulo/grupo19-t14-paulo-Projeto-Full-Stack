import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAdvertsController,
  listAdvertsFiltersController,
  listAllAdvertsOfOneSellerController,
  retriveAnnouncementController,
  updateAnnouncementController,
} from "../controllers/adverts.controllers";
import { tokenVerifyMiddleware } from "../middlewares/ensureTokenValid.middleware";
import { ensureIsAdvertOwnerMiddleware } from "../middlewares/ensureIsAdvertOwner.middleware";

const adverstsRoutes = Router();

adverstsRoutes.get("", listAdvertsController);
adverstsRoutes.get("/filters", listAdvertsFiltersController)
adverstsRoutes.get("/:id", retriveAnnouncementController);
adverstsRoutes.get("/seller/:id", listAllAdvertsOfOneSellerController);
adverstsRoutes.use(tokenVerifyMiddleware);
adverstsRoutes.post("", createAnnouncementController);
adverstsRoutes.patch(
  "/:id",
  ensureIsAdvertOwnerMiddleware,
  updateAnnouncementController
);
adverstsRoutes.delete(
  "/:id",
  ensureIsAdvertOwnerMiddleware,
  deleteAnnouncementController
);

export default adverstsRoutes;
