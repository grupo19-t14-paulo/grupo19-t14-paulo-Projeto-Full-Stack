import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import {
    TCommentRequest,
    TCommentResponse,
} from "../../interfaces/comments.interfaces";
import { commentSchemaResponse } from "../../schemas/comments.schema";
import AppError from "./../../errors/AppError";

const updateComment = async (
    commentId: string,
    commentData: TCommentRequest
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

    const updatedComment = commentsRepository.create({
        ...findComment,
        ...commentData,
    });

    await commentsRepository.save(updatedComment);

    return commentSchemaResponse.parse(updatedComment);
};

export { updateComment };
