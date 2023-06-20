import { randomUUID } from "node:crypto";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import {
  resetPasswordTemplateUtils,
  sendEmailUtils,
} from "../../utils/sendEmail.utils";

const sendEmailResetPasswordService = async (email: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({
    email,
  });

  const resetToken = randomUUID();

  const newUserData = usersRepository.create({
    ...user,
    reset_token: resetToken,
  });

  await usersRepository.save(newUserData);

  const resetPassordTemplate = resetPasswordTemplateUtils(
    user!.name,
    email,
    resetToken
  );

  await sendEmailUtils(resetPassordTemplate);
};

export { sendEmailResetPasswordService };
