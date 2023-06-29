import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";

const ensureEmailIsUniqueUpdateMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    let oldBody = req.body;

    if (!oldBody.email) {
        return next();
    }

    const findUser: User | null = await userRepository.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (findUser?.id === res.locals.userId) {
        delete oldBody.email;
        req.body = { ...oldBody };
    } else {
        throw new AppError("Email already exists", 409);
    }

    return next();
};

export { ensureEmailIsUniqueUpdateMiddleware };
