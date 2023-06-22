import { Request, Response } from "express";
import createAnnouncementService from "../services/adverts/createAnnouncement.service";
import {
  IAnnouncementRequest,
  IAnnouncementUpdate,
} from "../interfaces/adverts.interfaces";
import listAdvertsService from "../services/adverts/listAdverts.service";
import retriveAnnouncementService from "../services/adverts/retriveAnnouncement.service";
import updateAnnouncementService from "../services/adverts/updateAnnouncement.service";
import deleteAnnouncementService from "../services/adverts/deleteAnnouncement.service";
import { listAllAdvertsOfOneSellerService } from "../services/adverts/listAllAdvertsOfOneSeller.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const data: IAnnouncementRequest = req.body;
  const userId: string = res.locals.id;

  const announcement = await createAnnouncementService(data, userId);

  return res.status(201).json(announcement);
};

const listAdvertsController = async (req: Request, res: Response) => {
  const adverts = await listAdvertsService(req.query);
  return res.json(adverts);
};

const retriveAnnouncementController = async (req: Request, res: Response) => {
  const announcement = await retriveAnnouncementService(req.params.id);

  return res.json(announcement);
};

const updateAnnouncementController = async (req: Request, res: Response) => {
  const data: IAnnouncementUpdate = req.body;

  const announcement = await updateAnnouncementService(data, req.params.id);

  return res.json(announcement);
};

const deleteAnnouncementController = async (req: Request, res: Response) => {
  await deleteAnnouncementService(req.params.id);

  res.status(204).send();
};

const listAllAdvertsOfOneSellerController = async (
  req: Request,
  res: Response
) => {
  const sellerId: string = req.params.id;

  const sellerWithAdverts = await listAllAdvertsOfOneSellerService(sellerId);

  return res.json(sellerWithAdverts);
};

export {
  createAnnouncementController,
  listAdvertsController,
  retriveAnnouncementController,
  updateAnnouncementController,
  deleteAnnouncementController,
  listAllAdvertsOfOneSellerController,
};
