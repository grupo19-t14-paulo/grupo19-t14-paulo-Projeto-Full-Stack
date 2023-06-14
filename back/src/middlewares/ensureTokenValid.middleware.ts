import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import jwt from "jsonwebtoken";


const tokenVerifyMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        throw new AppError("No token has been sent", 401)
    };

    token = token.split(" ")[1];

    jwt.verify(
        token,
        process.env.SECRET_KEY!,
        (error: any, decoded: any) => {
            if (error){
                throw new AppError("Invalid token", 401);
            };
            res.locals.userId = decoded.sub;
            next();
        }
    );
};

export { tokenVerifyMiddleware };