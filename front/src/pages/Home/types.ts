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
    [key: string]: string | undefined;
}

interface IApiFilters {
    [key: string]: string[];
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
    user: {
        id: string;
        name: string;
        phone: string;
        type: string;
    };
}[];



export type { IAnnouncementResponse, IFilters, IApiFilters };