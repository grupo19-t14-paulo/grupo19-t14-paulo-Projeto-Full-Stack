import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  resetPasswordController,
  retrieveUserController,
  sendEmailResetPasswordController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailIsUniqueMiddleware } from "../middlewares/ensureEmailIsUnique.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";
import { tokenVerifyMiddleware } from "../middlewares/ensureTokenValid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { emailSchema, passwordSchema } from "../schemas/sendEmail.schema";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);

usersRoutes.post(
  "/resetpassword",
  ensureUserExistsMiddleware,
  ensureDataIsValidMiddleware(emailSchema),
  sendEmailResetPasswordController
);

usersRoutes.patch(
  "/resetpassword/:token",
  ensureDataIsValidMiddleware(passwordSchema),
  resetPasswordController
);

usersRoutes.use(tokenVerifyMiddleware);

usersRoutes.get("/", ensureIdExistsMiddleware, retrieveUserController);

usersRoutes.patch(
  "/",
  ensureIdExistsMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  ensureEmailIsUniqueMiddleware,
  updateUserController
);

usersRoutes.delete("/", ensureIdExistsMiddleware, deleteUserController);

export { usersRoutes };
