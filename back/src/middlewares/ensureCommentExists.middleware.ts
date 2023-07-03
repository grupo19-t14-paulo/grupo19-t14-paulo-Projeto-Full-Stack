import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Comment } from "../entities/comments.entity";
import AppError from "../errors/AppError";

const ensureCommentExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    const comment = await commentsRepository.findOneBy({
        id: req.params.id,
    });

    if (!comment) {
        throw new AppError("Comment not found!", 404);
    }

    return next();
};

export { ensureCommentExistsMiddleware };
