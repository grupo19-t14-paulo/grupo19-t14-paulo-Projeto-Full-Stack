import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/users.schema";
import AppError from "../../errors/AppError";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOneBy({
    email: userData.email,
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  const user: User = userRepository.create({
    name: userData.name,
    email: userData.email,
    cep: userData.cep,
    birthDate: userData.birthDate,
    city: userData.city,
    complement: userData.complement,
    cpf: userData.cpf,
    description: userData.description || "",
    phone: userData.phone,
    number: userData.number,
    type: userData.type,
    password: userData.password,
    state: userData.state,
    street: userData.street,
  });

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export { createUserService };
