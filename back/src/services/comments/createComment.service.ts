import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import { User } from "../../entities/users.entity";
import { Comment } from "../../entities/comments.entity";
import {
    TCommentRequest,
    TCommentResponse,
} from "../../interfaces/comments.interfaces";
import AppError from "./../../errors/AppError";
import { commentSchemaResponse } from "../../schemas/comments.schema";

const createCommentService = async (
    advertId: string,
    userId: string,
    commentData: TCommentRequest
): Promise<TCommentResponse> => {
    const advertsRepository = AppDataSource.getRepository(Adverts);

    const usersRepository = AppDataSource.getRepository(User);

    const commentsRepository = AppDataSource.getRepository(Comment);

    const findAdvert = await advertsRepository.findOneBy({
        id: advertId,
    });

    if (!findAdvert) {
        throw new AppError("User not found!", 404);
    }

    const findUser = await usersRepository.findOneBy({
        id: userId,
    });

    if (!findUser) {
        throw new AppError("User not found!", 404);
    }

    const comment = commentsRepository.create({
        ...commentData,
        user: findUser,
        advert: findAdvert,
    });

    await commentsRepository.save(comment);

    return commentSchemaResponse.parse(comment);
};

export { createCommentService };
