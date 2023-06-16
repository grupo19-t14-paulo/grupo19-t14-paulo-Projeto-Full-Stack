import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { IAnnouncementResponse } from "../../interfaces/adverts.interfaces";
// import { TUserWithAdverts } from "../../interfaces/users.interfaces";

const listAllAdvertsOfOneSellerService = async (
    userId: string
): Promise<IAnnouncementResponse> => {
    const usersRepository = AppDataSource.getRepository(User);

    const advertsRepository = AppDataSource.getRepository(Adverts);

    const findUser = usersRepository.findOne({
        where: {
            id: userId,
        },
        // relations: {
        //     adverts: true,
        // },
    });

    if (!findUser) {
        throw new AppError("User not found!", 404);
    }

    const adverts = advertsRepository.find({
        where: {
            user: findUser,
        },
        relations: {
            images: true,
        },
    });

    return adverts;
};

export { listAllAdvertsOfOneSellerService };
