import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";
import {
    IAnnouncement,
    IAnnouncementUpdate,
    TAnnouncementWithUserSchema,
} from "../../interfaces/adverts.interfaces";
import {
    announcementSchema,
    announcementWithUserSchema,
} from "../../schemas/adverts.schema";

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
        // id: announcementUp?.id,
        // brand: announcementUp?.brand,
        // model: announcementUp?.model,
        // year: announcement?.year,
        // fuel: announcementUp?.fuel,
        // mileage: announcementUp?.mileage,
        // color: announcementUp?.color,
        // value: Number(announcementUp?.value),
        // price: Number(announcementUp?.price),
        // description: announcementUp?.description,
        // active: announcementUp?.active,
        ...findAdvert,
        value: Number(announcement?.value),
        price: Number(announcement?.price),
        images: announcementUp?.images,
    };

    return announcementWithUserSchema.parse(response);
};

export default updateAnnouncementService;
