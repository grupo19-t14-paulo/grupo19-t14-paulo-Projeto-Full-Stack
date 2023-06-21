interface IProductProps {
    id: string
    img: string;
    title: string;
    description: string;
    advertiser: string;
    mileage: string;
    year: string;
    price: number;
    active?: boolean;
    fipePrice: number;
}

interface IFilters {
    brand: string[];
    model: string[];
    color: string[];
    year: string[];
    fuel: string[];
}

const mockCarros: IProductProps[] = [
    {
        id: "2b865474-2ce7-4448-8aac-dc906560b79c",
        img: "Car",
        title: "Fiat Marea",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2019",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "b7177a9b-36f3-43cf-a164-27f1e74c3d9c",
        img: "Car",
        title: "Fiat Argo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2022",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "4678bad9-0ae6-4954-9b86-0ae28f88bc7e",
        img: "Car",
        title: "Chevrolet Prisma",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2011",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "a4bfb688-da5b-40f4-9b99-89ced606319d",
        img: "Car",
        title: "Fiat Marea",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2019",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "22f897c9-b9c2-4945-82e7-cad183213db1",
        img: "Car",
        title: "Fiat Argo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2020",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "c38f568d-3725-4b01-a848-4d468f31d391",
        img: "Car",
        title: "Chevrolet Prisma",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2011",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "e2200d78-a298-420c-b5d9-d69f841031ba",
        img: "Car",
        title: "Fiat Marea",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2019",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "800a1e8f-10f9-498f-99d5-7eb57eeadaab",
        img: "Car",
        title: "Fiat Argo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2020",
        active: true,
        price: 25000,
        fipePrice: 30000
    },
    {
        id: "800a1e8f-10f9-498f-99d5-7eb57eeawaab",
        img: "Car",
        title: "Fiat Argo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
        advertiser: "Julia Carla",
        mileage: "40000",
        year: "2020",
        active: true,
        price: 25000,
        fipePrice: 30000
    },

];

const mockFilters: IFilters = {
    brand: [
        "General Motors",
        "Fiat",
        "Ford",
        "Honda",
        "Volksvagen"
    ],
    model: [
        "Civic",
        "Corolla",
        "Cruze",
        "Fit",
        "Gol",
        "Ka",
        "Onix",
        "Porsche 718",
    ],
    color: [
        "Azul",
        "Branca",
        "Cinza",
        "Prata",
        "Preta",
        "Verde"
    ],
    year: [
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
    ],
    fuel: [
        "Diesel",
        "Etanol",
        "Gasolina",
        "Flex"
    ]
}

export { mockCarros, mockFilters };
export type {IProductProps};