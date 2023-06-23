import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";

const listAllAdvertsOfOneSellerService = async (userId: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  const advertsRepository = AppDataSource.getRepository(Adverts);

  const findUser = usersRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new AppError("User not found!", 404);
  }

  const adverts = advertsRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      images: true,
    },
  });

  return adverts;
};

export { listAllAdvertsOfOneSellerService };
