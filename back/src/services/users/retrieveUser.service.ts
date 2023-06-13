import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

const retrieveUsersService = async (userId: string): Promise<TUserResponse> => {
    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    return returnUserSchema.parse(user);
};

export { retrieveUsersService };
