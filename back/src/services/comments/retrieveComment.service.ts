import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { TCommentResponse } from "../../interfaces/comments.interfaces";
import { commentSchemaResponse } from "../../schemas/comments.schema";
import AppError from "./../../errors/AppError";

const retrieveComment = async (
    commentId: string
): Promise<TCommentResponse> => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    const findComment = await commentsRepository.findOne({
        where: {
            id: commentId,
        },
        relations: {
            user: true,
            advert: true,
        },
    });

    if (!findComment) {
        throw new AppError("User not found!", 404);
    }

    return commentSchemaResponse.parse(findComment);
};

export { retrieveComment };
