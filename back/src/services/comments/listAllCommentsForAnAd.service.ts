import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import { Comment } from "../../entities/comments.entity";
import { TCommentsResponse } from "../../interfaces/comments.interfaces";
import { commentsSchemaResponse } from "../../schemas/comments.schema";
import AppError from "./../../errors/AppError";

const listAllCommentsForAnAdService = async (
    advertId: string
): Promise<TCommentsResponse> => {
    const advertsRepository = AppDataSource.getRepository(Adverts);

    const commentsRepository = AppDataSource.getRepository(Comment);

    const findAdvert = await advertsRepository.findOneBy({
        id: advertId,
    });

    if (!findAdvert) {
        throw new AppError("User not found!", 404);
    }

    const comments = await commentsRepository.find({
        where: {
            advert: {
                id: advertId,
            },
        },
        relations: {
            user: true,
            advert: true,
        },
    });

    return commentsSchemaResponse.parse(comments);
};

export { listAllCommentsForAnAdService };
