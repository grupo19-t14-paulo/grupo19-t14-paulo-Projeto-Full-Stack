import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import Images from "../../entities/images.entity";
import {
  IAnnouncement,
  IAnnouncementRequest,
} from "../../interfaces/adverts.interfaces";
import { announcementSchema } from "../../schemas/adverts.schema";

const createAnnouncementService = async (
  data: IAnnouncementRequest
): Promise<IAnnouncement> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const imageRepository = AppDataSource.getRepository(Images);
  const imagesData = data?.images;

  const announcementData = {
    brand: data.brand,
    model: data.model,
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
  });

  await advertsRepository.save(announcement);

  imagesData?.forEach(async (el) => {
    const newImage = imageRepository.create({
      ...el,
      announcement,
    });

    await imageRepository.save(newImage);
  });

  const response = {
    id: announcement?.id,
    brand: announcement?.brand,
    model: announcement?.model,
    fuel: announcement?.fuel,
    mileage: announcement?.mileage,
    color: announcement?.color,
    value: Number(announcement?.value),
    price: Number(announcement?.price),
    description: announcement?.description,
    active: announcement?.active,
    images: imagesData,
  };

  return announcementSchema.parse(response);
};

export default createAnnouncementService;
