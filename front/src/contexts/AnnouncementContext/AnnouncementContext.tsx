import React, { ReactNode, createContext, useState } from "react";

export interface IAdvertiser {
  id?: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string;
  color: string;
  value: number;
  price: number;
  description: string;
  images?: { image: string }[];
  active?: boolean;
}

interface IAdProviderProps {
  children: ReactNode;
}

interface IAnnouncementContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  ad: IAdvertiser[] | undefined;
  setAd: React.Dispatch<React.SetStateAction<IAdvertiser[] | undefined>>;
}

const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

const AnnouncementProvider = ({ children }: IAdProviderProps) => {
  const [modal, setModal] = useState(false);
  const [ad, setAd] = useState<IAdvertiser[] | undefined>([]);

  return (
    <AnnouncementContext.Provider value={{ modal, setModal, ad, setAd }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export { AnnouncementContext, AnnouncementProvider };
