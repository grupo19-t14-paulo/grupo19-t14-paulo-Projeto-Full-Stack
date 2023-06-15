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
        // id: announcement?.id,
        // brand: announcement?.brand,
        // model: announcement?.model,
        // year: announcement?.year,
        // fuel: announcement?.fuel,
        // mileage: announcement?.mileage,
        // color: announcement?.color,
        // value: Number(announcement?.value),
        // price: Number(announcement?.price),
        // description: announcement?.description,
        // active: announcement?.active,
        ...findAdvert,
        value: Number(announcement?.value),
        price: Number(announcement?.price),
        images: announcement?.images,
    };

    return announcementWithUserSchema.parse(response);
};

export default retriveAnnouncementService;
