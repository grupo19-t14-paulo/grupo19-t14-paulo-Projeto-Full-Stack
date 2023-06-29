import { Request, Response } from "express";
import { TUser } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { retrieveUsersService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { sendEmailResetPasswordService } from "../services/users/sendEmailResetPassword.service";
import { resetPasswordService } from "../services/users/resetPassoword.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  const user = await retrieveUsersService(userId);

  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  const newUserData = await updateUserService(req.body, userId);

  return res.status(200).json(newUserData);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  await deleteUserService(userId);

  return res.status(204).send();
};

const sendEmailResetPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  await sendEmailResetPasswordService(email);

  return res.json({ message: "Token sent to your email." });
};

const resetPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { password } = req.body;
  const { token } = req.params;

  await resetPasswordService(password, token);

  return res.json({ message: "Your password has been changed." });
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
  sendEmailResetPasswordController,
  resetPasswordController,
};
