import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import Adverts from "../entities/adverts.entity";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";

const ensureIsAdvertOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const advertsRepository = AppDataSource.getRepository(Adverts);

    const usersRepository = AppDataSource.getRepository(User);

    const user = await usersRepository.findOneBy({
        id: res.locals.userId,
    });

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    const announcement = await advertsRepository.findOne({
        where: {
            id: req.params.id,
        },
        relations: {
            user: true,
        },
    });

    if (!announcement) {
        throw new AppError("Ad does not exist", 404);
    }

    if (announcement.user.id !== user.id) {
        throw new AppError("You don't have permission!", 403);
    }

    return next();
};

export { ensureIsAdvertOwnerMiddleware };
