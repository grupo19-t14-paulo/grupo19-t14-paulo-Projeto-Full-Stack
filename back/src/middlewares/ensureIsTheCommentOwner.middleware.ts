import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Comment } from "../entities/comments.entity";
import AppError from "../errors/AppError";

const ensureIsTheCommentOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    const comment = await commentsRepository.findOne({
        where: {
            id: req.params.id,
        },
        relations: {
            user: true,
        },
    });

    if (comment!.user.id !== res.locals.userId) {
        throw new AppError("Only the owner can manage this comment!", 403);
    }

    return next();
};

export { ensureIsTheCommentOwnerMiddleware };
