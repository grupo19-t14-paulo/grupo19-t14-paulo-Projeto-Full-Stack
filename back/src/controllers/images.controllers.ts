import { Request, Response } from "express";
import { IImageRequest } from "../interfaces/images.interfaces";
import createImageservice from "../services/images/createImage.service";
import listImagesSevice from "../services/images/listImages.service";
import deleteImageService from "../services/images/deleteImage.service";

const createImageController = async (req: Request, res: Response) => {
  const data: IImageRequest = req.body;

  const image = await createImageservice(data, req.params.id);

  return res.status(201).json(image);
};

const listImagesController = async (req: Request, res: Response) => {
  const images = await listImagesSevice(req.params.id);

  return res.json(images);
};

const deleteImageController = async (req: Request, res: Response) => {
  await deleteImageService(req.params.id);

  return res.status(204).send();
};

export { createImageController, listImagesController, deleteImageController };
