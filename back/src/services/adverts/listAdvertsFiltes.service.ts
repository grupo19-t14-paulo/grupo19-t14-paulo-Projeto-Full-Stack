import { AppDataSource } from "../../data-source";
import Adverts, { FuelCar } from "../../entities/adverts.entity";
import AppError from "../../errors/AppError";

const listAdvertsFiltersService = async () => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  try {
    const adverts = await advertsRepository.find();

    const uniqueFilters: {
      brand: string[];
      fuel: FuelCar[];
      color: string[];
      year: string[];
      model: string[];
    } = {
      brand: [],
      fuel: [],
      color: [],
      year: [],
      model: [],
    };

    adverts.forEach((advert) => {
      if (!uniqueFilters.brand.includes(advert.brand)) {
        uniqueFilters.brand.push(advert.brand);
      }

      if (!uniqueFilters.fuel.includes(advert.fuel)) {
        uniqueFilters.fuel.push(advert.fuel);
      }

      if (!uniqueFilters.color.includes(advert.color)) {
        uniqueFilters.color.push(advert.color);
      }

      if (!uniqueFilters.year.includes(advert.year)) {
        uniqueFilters.year.push(advert.year);
      }

      if (!uniqueFilters.model.includes(advert.model)) {
        uniqueFilters.model.push(advert.model);
      }
    });

    return uniqueFilters;
  } catch (error) {
    throw new AppError("Failed to retrieve advert filters.", 500);
  }
};

export default listAdvertsFiltersService;
