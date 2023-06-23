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

  const queryBuilder = advertsRepository.createQueryBuilder("item");

  if (model) {
    queryBuilder.andWhere("item.model = :model", { model });
  }

  if (year) {
    queryBuilder.andWhere("item.year = :year", { year });
  }

  if (color) {
    queryBuilder.andWhere("item.color = :color", { color });
  }

  if (fuel) {
    queryBuilder.andWhere("item.fuel = :fuel", { fuel });
  }
  if (brand) {
    queryBuilder.andWhere("item.brand = :brand", { brand });
  }

  if (minPrice) {
    queryBuilder.andWhere("item.price >= :minPrice", { minPrice });
  }

  if (maxPrice) {
    queryBuilder.andWhere("item.price <= :maxPrice", { maxPrice });
  }

  if (minMileage) {
    console.log(minMileage);
    queryBuilder.andWhere("item.mileage >= :minMileage", { minMileage });
  }

  if (maxMileage) {
    queryBuilder.andWhere("item.mileage <= :maxMileage", { maxMileage });
  }

  try {
    const adverts = await advertsRepository.find({
      relations: {
        images: true,
      },
    });

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
