import React, { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

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
  loadingAd: boolean;
  setloadingAd: React.Dispatch<React.SetStateAction<boolean>>;
  ad: IAdvertiser[] | undefined;
  setAd: React.Dispatch<React.SetStateAction<IAdvertiser[] | undefined>>;
  submitAddAnnouncement(data: IAdvertiser): Promise<void>;
}

const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

const AnnouncementProvider = ({ children }: IAdProviderProps) => {
  const [loadingAd, setloadingAd] = useState(false);
  const [modal, setModal] = useState(false);
  const [ad, setAd] = useState<IAdvertiser[] | undefined>([]);

  const submitAddAnnouncement = async (data: IAdvertiser): Promise<void> => {
    try {
      setloadingAd(true);
      const res = await api.post("adverts", data);

      toast.success("Anúncio adicionado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      const newAd = [...(ad || []), res.data];
      setAd(newAd);
      setModal(false);
      setloadingAd(false);
    } catch (err) {
      toast.error("Ops algo de errado, revise os campo!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    } finally {
      setloadingAd(false);
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{
        modal,
        setModal,
        ad,
        setAd,
        submitAddAnnouncement,
        loadingAd,
        setloadingAd,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export { AnnouncementContext, AnnouncementProvider };
