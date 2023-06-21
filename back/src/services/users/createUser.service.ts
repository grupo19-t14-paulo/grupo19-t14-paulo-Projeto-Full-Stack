import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/users.schema";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create({
    ...userData,
  });

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export { createUserService };
