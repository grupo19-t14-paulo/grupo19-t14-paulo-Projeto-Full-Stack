import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { IAnnouncementResponse } from "../../interfaces/adverts.interfaces";
import { advertsSchemaResponse } from "../../schemas/adverts.schema";

const listAllAdvertsOfOneSellerService = async (
  userId: string
): Promise<IAnnouncementResponse> => {
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

  const queryBuilder = advertsRepository.createQueryBuilder("adverts");

  queryBuilder.innerJoinAndSelect("adverts.images", "image");
  queryBuilder.innerJoinAndSelect("adverts.user", "user");
  queryBuilder.where("adverts.user = :id", { id: userId });

  const adverts = await queryBuilder.getMany();

  const response = adverts.map((el) => {
    el.mileage = +`${el.mileage}`;
    el.price = +`${el.price}`;
    el.value = +`${el.value}`;
    return el;
  });

  return advertsSchemaResponse.parse(response);
};

export { listAllAdvertsOfOneSellerService };
