import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import { IAnnouncementResponse } from "../../interfaces/adverts.interfaces";
import { advertsSchemaResponse } from "../../schemas/adverts.schema";

const listAdvertsService = async (): Promise<IAnnouncementResponse> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  /* const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  } */

  const adverts = await advertsRepository.find({
    relations: {
      images: true,
    },
  });

  const upAdverts = adverts.map((el) => {
    el.price = Number(el.price);
    el.value = Number(el.value);

    return el;
  });

  return advertsSchemaResponse.parse(upAdverts);
};

export default listAdvertsService;
