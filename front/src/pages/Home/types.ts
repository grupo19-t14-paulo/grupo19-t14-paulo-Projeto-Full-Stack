interface IFilters {
    brand?: string;
    model?: string;
    color?: string;
    year?: string;
    fuel?: string;
    minMileage?: string;
    maxMileage?: string;
    minPrice?: string;
    maxPrice?: string;
}

interface IApiFilters {
    brand: string[];
    color: string[];
    fuel: string[];
    model: string[];
    year: string[];
}

interface IAnnouncementResponse {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    value: number;
    mileage: string;
    color: string;
    price: number;
    description: string;
    active: boolean;
    images: {
        image: string;
    }[];
}[];



export type { IAnnouncementResponse, IFilters, IApiFilters };