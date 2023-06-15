import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { TUserWithAdverts } from "../../interfaces/users.interfaces";

const listAllAdvertsOfOneSellerService = async (
    userId: string
): Promise<TUserWithAdverts> => {
    const usersRepository = AppDataSource.getRepository(User);

    const findUser = usersRepository.findOne({
        where: {
            id: userId,
        },
        relations: {
            adverts: true,
        },
    });

    if (!findUser) {
        throw new AppError("User not found!", 404);
    }

    return findUser;
};

export { listAllAdvertsOfOneSellerService };
