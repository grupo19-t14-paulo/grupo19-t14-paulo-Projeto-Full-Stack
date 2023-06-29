import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IAdvertiser,
  IAnnouncementContext,
  IUserAdvertiser,
} from "../../interfaces/AdvertsInterfaces";

interface IAdProviderProps {
  children: ReactNode;
}

const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

const AnnouncementProvider = ({ children }: IAdProviderProps) => {
  const [loadingAd, setloadingAd] = useState(false);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [ad, setAd] = useState<IAdvertiser[] | undefined>([]);
  const [userAdvertiser, setUserAdvertiser] = useState<IUserAdvertiser | null>(
    null
  );

  const submitAddAnnouncement = async (data: IAdvertiser): Promise<void> => {
    try {
      setloadingAd(true);

      const announcement = {
        ...data,
        mileage: data.mileage.replace(/[^\d]+/g, ""),
        value: data.value.replace(/[^\d]+/g, "").slice(0, -2),
        price: data.price.replace(/[^\d]+/g, "").slice(0, -2),
      };

      const res = await api.post("adverts", announcement);

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

  const removeAd = async (id: string): Promise<void> => {
    try {
      await api.delete(`adverts/${id}`);
      toast.success("Anúncio removido!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const filterRemove = ad?.filter((element) => element.id !== id);
      setAd(filterRemove);
      setDeleteModal(false);
    } catch (err) {
      toast.error("Ops, algo deu errado!", {
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
        editModal,
        setEditModal,
        ad,
        setAd,
        submitAddAnnouncement,
        loadingAd,
        setloadingAd,
        userAdvertiser,
        setUserAdvertiser,
        removeAd,
        deleteModal,
        setDeleteModal,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export { AnnouncementContext, AnnouncementProvider };
