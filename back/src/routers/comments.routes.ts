import { Router } from "express";
import { tokenVerifyMiddleware } from "../middlewares/ensureTokenValid.middleware";
import {
    createCommentController,
    deleteCommentController,
    listAllCommentsForAnAdController,
    retrieveCommentController,
    updateCommentController,
} from "../controllers/comments.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { commentSchemaRequest } from "../schemas/comments.schema";
import { ensureCommentExistsMiddleware } from "../middlewares/ensureCommentExists.middleware";
import { ensureIsTheCommentOwnerMiddleware } from "../middlewares/ensureIsTheCommentOwner.middleware";

const commentsRoutes = Router();

commentsRoutes.get("/:id", listAllCommentsForAnAdController);

commentsRoutes.use(tokenVerifyMiddleware);

commentsRoutes.post(
    "/:id",
    ensureDataIsValidMiddleware(commentSchemaRequest),
    createCommentController
);

commentsRoutes.get(
    "/users/:id",
    ensureCommentExistsMiddleware,
    ensureIsTheCommentOwnerMiddleware,
    retrieveCommentController
);

commentsRoutes.patch(
    "/:id",
    ensureDataIsValidMiddleware(commentSchemaRequest),
    ensureCommentExistsMiddleware,
    ensureIsTheCommentOwnerMiddleware,
    updateCommentController
);

commentsRoutes.delete(
    "/:id",
    ensureCommentExistsMiddleware,
    ensureIsTheCommentOwnerMiddleware,
    deleteCommentController
);

export { commentsRoutes };
