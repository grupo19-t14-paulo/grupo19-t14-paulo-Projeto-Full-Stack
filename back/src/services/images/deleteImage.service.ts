import { AppDataSource } from "../../data-source";
import Images from "../../entities/images.entity";
import AppError from "../../errors/AppError";

const deleteImageService = async (imageId: string): Promise<void> => {
  const imagesRepository = AppDataSource.getRepository(Images);
  const image = await imagesRepository.findOneBy({ id: imageId });

  if (!image) {
    throw new AppError("Ad does not exist", 404);
  }

  await imagesRepository.remove(image);
};

export default deleteImageService;
