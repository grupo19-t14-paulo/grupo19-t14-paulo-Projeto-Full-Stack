import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";

const resetPasswordService = async (password: string, resetToken: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({
    reset_token: resetToken,
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const newUserData = usersRepository.create({
    ...user,
    password,
    reset_token: null,
  });

  await usersRepository.save(newUserData);
};

export { resetPasswordService };
