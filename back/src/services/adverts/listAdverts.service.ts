import { AppDataSource } from "../../data-source";
import Adverts from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";
import { IAnnouncementResponse } from "../../interfaces/adverts.interfaces";
import { IFilters } from "../../interfaces/filters.interfaces";
import { advertsSchemaResponse } from "../../schemas/adverts.schema";

const listAdvertsService = async ({
  model,
  fuel,
  year,
  color,
  brand,
  maxPrice,
  minPrice,
  maxMileage,
  minMileage,
}: IFilters): Promise<IAnnouncementResponse> => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  const queryBuilder = advertsRepository.createQueryBuilder("advert");

  if (model) {
    queryBuilder.andWhere("advert.model = :model", { model });
  }

  if (year) {
    queryBuilder.andWhere("advert.year = :year", { year });
  }

  if (color) {
    queryBuilder.andWhere("advert.color = :color", { color });
  }

  if (fuel) {
    queryBuilder.andWhere("advert.fuel = :fuel", { fuel });
  }
  if (brand) {
    queryBuilder.andWhere("advert.brand = :brand", { brand });
  }

  if (minPrice) {
    queryBuilder.andWhere("advert.price >= :minPrice", { minPrice });
  }

  if (maxPrice) {
    queryBuilder.andWhere("advert.price <= :maxPrice", { maxPrice });
  }

  if (minMileage) {
    queryBuilder.andWhere("advert.mileage >= :minMileage", { minMileage });
  }

  if (maxMileage) {
    queryBuilder.andWhere("advert.mileage <= :maxMileage", { maxMileage });
  }

  queryBuilder.leftJoinAndSelect("advert.images", "image");
  queryBuilder.leftJoinAndSelect("advert.user", "User");

  try {
    const adverts = await queryBuilder.getMany();
    const response = adverts.map((el) => {
      el.price = +`${el.price}`;
      el.value = +`${el.value}`;
      return el;
    });

    return advertsSchemaResponse.parse(response);
  } catch (error) {
    throw new AppError("No products has been found", 404);
  }
};

export default listAdvertsService;
