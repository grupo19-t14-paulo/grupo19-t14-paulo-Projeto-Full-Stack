import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { loginSchema } from "../schemas/session.schema";
import { sessionController } from "../controllers/session.controllers";

const sessionRoutes = Router();

sessionRoutes.post(
    "",
    ensureDataIsValidMiddleware(loginSchema),
    sessionController
);

export { sessionRoutes };