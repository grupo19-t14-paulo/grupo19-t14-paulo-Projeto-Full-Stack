import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";

const deleteUserService = async (userId: string): Promise<void> => {
    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: userId,
    });

    await usersRepository.remove(user!);
};

export { deleteUserService };
