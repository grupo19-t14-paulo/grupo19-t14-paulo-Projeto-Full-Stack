import axios from "axios";
import AppError from "../errors/AppError";

interface Car {
  name: string;
}

interface CarBrand {
  [brand: string]: Car[];
}

interface FullCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export const getCars = async (): Promise<Car[] | undefined> => {
  try {
    const response: CarBrand = await axios.get(
      "https://kenzie-kars.herokuapp.com/cars"
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCarsByBrand = async (
  brand: string
): Promise<FullCar[] | undefined> => {
  try {
    const response = await axios.get(
      `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
    );

    if (!response) {
      throw new AppError("Brand does not exists", 404);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUniqueCar = async (
  brand: string,
  name: string,
  fuel: number,
  year: string
): Promise<FullCar[] | undefined> => {
  console.log(brand, name, fuel, year);
  try {
    const response = await axios.get(
      `https://kenzie-kars.herokuapp.com/cars/unique?brand=${brand}&name=${name}&fuel=${fuel}&year=${year}`
    );

    if (!response) {
      throw new AppError("Car does not exists", 404);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
