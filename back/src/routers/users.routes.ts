import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    retrieveUserController,
    updateUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailIsUniqueMiddleware } from "../middlewares/ensureEmailIsUnique.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
    "",
    ensureDataIsValidMiddleware(createUserSchema),
    ensureEmailIsUniqueMiddleware,
    createUserController
);

usersRoutes.get("/:id", ensureIdExistsMiddleware, retrieveUserController);

usersRoutes.patch(
    "/:id",
    ensureIdExistsMiddleware,
    ensureDataIsValidMiddleware(updateUserSchema),
    ensureEmailIsUniqueMiddleware,
    updateUserController
);

usersRoutes.delete("/:id", ensureIdExistsMiddleware, deleteUserController);

export { usersRoutes };
