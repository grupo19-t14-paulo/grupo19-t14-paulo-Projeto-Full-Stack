import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import Images from "../../entities/images.entity";
import AppError from "../../errors/AppError";
import { IImageResponse } from "../../interfaces/images.interfaces";
import { imagesSchemaResponse } from "../../schemas/images.schema";

const listImagesSevice = async (idAd: string): Promise<IImageResponse> => {
  const imagesRepository = AppDataSource.getRepository(Images);
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const announcement = await advertsRepository.findOneBy({ id: idAd });

  if (!announcement) {
    throw new AppError("Ad does not exist", 404);
  }

  const images = await imagesRepository.find({
    where: {
      announcement: announcement,
    },
  });

  return imagesSchemaResponse.parse(images);
};

export default listImagesSevice;
