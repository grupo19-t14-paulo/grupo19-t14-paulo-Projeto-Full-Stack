import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import Images from "../../entities/images.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import {
  IAnnouncementRequest,
  TAnnouncementWithUserSchema,
} from "../../interfaces/adverts.interfaces";
import {
  announcementSchema,
  announcementWithUserSchema,
} from "../../schemas/adverts.schema";

const createAnnouncementService = async (
  data: IAnnouncementRequest,
  userId: string
): Promise<TAnnouncementWithUserSchema> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const imageRepository = AppDataSource.getRepository(Images);
  const imagesData = data?.images;

  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  if (user.type !== "Vendedor") {
    throw new AppError("Only a seller can create an advert!", 401);
  }

  const thereIsAd = await advertsRepository.findOne({
    where: {
      brand: data.brand,
      model: data.model,
      color: data.color,
    },
  });

  if (thereIsAd) {
    throw new AppError("Ad already exists, check if it's active", 409);
  }

  const announcementData = {
    brand: data.brand,
    model: data.model,
    year: data.year,
    fuel: data.fuel,
    mileage: data.mileage,
    value: data.value,
    color: data.color,
    price: data.price,
    description: data.description,
    active: data.active,
  };

  const announcement: Adverts = advertsRepository.create({
    ...announcementData,
    user: user,
  });

  await advertsRepository.save(announcement);

  imagesData?.forEach(async (el) => {
    const newImage = imageRepository.create({
      ...el,
      announcement,
    });

    await imageRepository.save(newImage);
  });

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
    value: Number(announcement?.value),
    price: Number(announcement?.price),
    images: imagesData,
  };

  return announcementWithUserSchema.parse(response);
};

export default createAnnouncementService;
