import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";
import {
  IAnnouncement,
  TAnnouncementWithUserSchema,
} from "../../interfaces/adverts.interfaces";
import {
  announcementSchema,
  announcementWithUserSchema,
} from "../../schemas/adverts.schema";

const retriveAnnouncementService = async (
  announcementId: string
): Promise<TAnnouncementWithUserSchema> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const announcement = await advertsRepository.findOne({
    where: {
      id: announcementId,
    },
    relations: {
      images: true,
    },
  });

  if (!announcement) {
    throw new AppError("Ad does not exist", 404);
  }

  const findAdvert = await advertsRepository.findOne({
    where: {
      id: announcement.id,
    },
    relations: {
      user: true,
    },
  });

  const response = {
    ...findAdvert,
    mileage: Number(announcement?.mileage),
    value: Number(announcement?.value),
    price: Number(announcement?.price),
    images: announcement?.images,
  };

  return announcementWithUserSchema.parse(response);
};

export default retriveAnnouncementService;
