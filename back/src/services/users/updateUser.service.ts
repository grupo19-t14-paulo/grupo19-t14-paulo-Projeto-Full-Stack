import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

const updateUserService = async (
    data: TUserUpdate,
    userId: string
): Promise<TUserResponse> => {
    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    const newUserData = usersRepository.create({
        ...user,
        ...data,
    });

    await usersRepository.save(newUserData);

    return returnUserSchema.parse(newUserData);
};

export { updateUserService };
