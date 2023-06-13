import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import Images from "../../entities/images.entity";
import AppError from "../../errors/AppError";

const deleteAnnouncementService = async (
  announcementId: string
): Promise<void> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const imagesRepository = AppDataSource.getRepository(Images);
  const announcement = await advertsRepository.findOneBy({
    id: announcementId,
  });

  if (!announcement) {
    throw new AppError("Ad does not exist", 404);
  }
  await advertsRepository.remove(announcement);
};

export default deleteAnnouncementService;
