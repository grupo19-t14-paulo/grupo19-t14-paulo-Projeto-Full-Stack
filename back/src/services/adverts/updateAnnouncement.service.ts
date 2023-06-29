import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";
import {
  IAnnouncementUpdate,
  TAnnouncementWithUserSchema,
} from "../../interfaces/adverts.interfaces";
import { announcementWithUserSchema } from "../../schemas/adverts.schema";

const updateAnnouncementService = async (
  data: IAnnouncementUpdate,
  announcementId: string
): Promise<TAnnouncementWithUserSchema> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const announcement = await advertsRepository.findOneBy({
    id: announcementId,
  });

  if (!announcement) {
    throw new AppError("ad does not exist", 404);
  }

  if (data.mileage) {
    data.mileage = Number(data.mileage);
  }

  if (data.value) {
    data.value = Number(data.value);
  }

  if (data.price) {
    data.price = Number(data.price);
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

  const findAdvert = await advertsRepository.findOne({
    where: {
      id: announcementUp!.id,
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
    images: announcementUp?.images,
  };

  return announcementWithUserSchema.parse(response);
};

export default updateAnnouncementService;
