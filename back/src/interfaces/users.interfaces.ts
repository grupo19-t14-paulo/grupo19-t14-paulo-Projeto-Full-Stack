import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
    createUserSchema,
    returnUserSchema,
    userSchema,
} from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof createUserSchema>;
type TUserResponse = z.infer<typeof returnUserSchema>;
type TUserUpdate = DeepPartial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
