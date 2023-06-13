import { Request, Response } from "express";
import { TUser } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { retrieveUsersService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

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
    const userId = req.params.id;

    const user = await retrieveUsersService(userId);

    return res.status(200).json(user);
};

const updateUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = req.params.id;

    const newUserData = await updateUserService(req.body, userId);

    return res.status(200).json(newUserData);
};

const deleteUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = req.params.id;

    await deleteUserService(userId);

    return res.status(204).send();
};

export {
    createUserController,
    retrieveUserController,
    updateUserController,
    deleteUserController,
};
