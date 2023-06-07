import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import Images from "../../entities/images.entity";
import AppError from "../../errors/AppError";
import { IImage, IImageRequest } from "../../interfaces/images.interfaces";
import { imageSchema } from "../../schemas/images.schema";

const createImageservice = async (
  data: IImageRequest,
  idAd: string
): Promise<IImage> => {
  const imageRepository = AppDataSource.getRepository(Images);
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const announcement = await advertsRepository.findOneBy({ id: idAd });

  if (!announcement) {
    throw new AppError("Ad does not exist", 404);
  }

  const image = await imageRepository.findOne({
    where: {
      image: data.image,
      announcement: announcement,
    },
  });

  if (image) {
    throw new AppError("Image already exists", 409);
  }

  const newImage = imageRepository.create({
    ...data,
    announcement,
  });

  await imageRepository.save(newImage);

  return imageSchema.parse(newImage);
};

export default createImageservice;
