import React from "react";

export interface IAdvertiser {
  id?: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string;
  color: string;
  value: string;
  price: string;
  description: string;
  images?: { image: string }[];
  active?: any;
  user: IUserAdvertiser;
}

export interface IUserAdvertiser {
  id: string;
  name: string;
  phone: string;
  type: string;
  description: string;
}

export interface IAnnouncementContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  loadingAd: boolean;
  setloadingAd: React.Dispatch<React.SetStateAction<boolean>>;
  ad: IAdvertiser[] | undefined;
  setAd: React.Dispatch<React.SetStateAction<IAdvertiser[] | undefined>>;
  userAdvertiser: IUserAdvertiser | null;
  setUserAdvertiser: React.Dispatch<
    React.SetStateAction<IUserAdvertiser | null>
  >;
  submitAddAnnouncement(data: IAdvertiser): Promise<void>;
  removeAd(id: string): Promise<void>;
}
