import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";
import {
  IAnnouncement,
  IAnnouncementUpdate,
} from "../../interfaces/adverts.interfaces";
import { announcementSchema } from "../../schemas/adverts.schema";

const updateAnnouncementService = async (
  data: IAnnouncementUpdate,
  announcementId: string
): Promise<IAnnouncement> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const announcement = await advertsRepository.findOneBy({
    id: announcementId,
  });

  if (!announcement) {
    throw new AppError("ad does not exist", 404);
  }

  await AppDataSource.createQueryBuilder()
    .update(Adverts)
    .set({
      ...data,
    })
    .where("id = :id", { id: announcementId })
    .execute();

  const announcementUp = await advertsRepository.findOne({
    where: {
      id: announcementId,
    },
    relations: {
      images: true,
    },
  });

  const response = {
    id: announcementUp?.id,
    brand: announcementUp?.brand,
    model: announcementUp?.model,
    year: announcement?.year,
    fuel: announcementUp?.fuel,
    mileage: announcementUp?.mileage,
    color: announcementUp?.color,
    value: Number(announcementUp?.value),
    price: Number(announcementUp?.price),
    description: announcementUp?.description,
    active: announcementUp?.active,
    images: announcementUp?.images,
  };

  return announcementSchema.parse(response);
};

export default updateAnnouncementService;