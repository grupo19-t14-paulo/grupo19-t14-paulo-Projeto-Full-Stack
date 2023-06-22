import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { ILogin } from "../../interfaces/session.interfaces";
import AppError from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createSessionService = async ({ email, password }: ILogin) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { email: email } });
    
    if (!user) {
        throw new AppError("Invalid email or password", 403);
    };
    
    const matchPassword = await compare(password, user.password);
    if (!matchPassword) {
        throw new AppError("Invalid email or password", 403);
    };

    
    const token = jwt.sign({ ...user }, process.env.SECRET_KEY!, {
        subject: user.id,
        expiresIn: +`${process.env.EXPIRES_IN}`
    });
    return token;
};

export { createSessionService };