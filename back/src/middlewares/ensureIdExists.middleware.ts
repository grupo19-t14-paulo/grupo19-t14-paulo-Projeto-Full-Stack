import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";

const ensureIdExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: {
            id: res.locals.userId,
        },
    });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    return next();
};

export { ensureIdExistsMiddleware };
