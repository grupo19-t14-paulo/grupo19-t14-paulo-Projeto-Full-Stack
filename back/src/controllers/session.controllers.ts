import { Request, Response } from "express";
import { ILogin } from "../interfaces/session.interfaces";
import { createSessionService } from "../services/session/session.services";

const sessionController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const loginData: ILogin = req.body;
    const token = await createSessionService(loginData)

    return res.json({token: token});
};

export { sessionController };