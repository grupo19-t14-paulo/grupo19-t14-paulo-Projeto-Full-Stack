import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  createUserSchema,
  returnUserSchema,
  returnUserWithAdverts,
  userSchema,
} from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof createUserSchema>;
type TUserResponse = z.infer<typeof returnUserSchema>;
type TUserUpdate = DeepPartial<TUserRequest>;
type TUserWithAdverts = z.infer<typeof returnUserWithAdverts>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate, TUserWithAdverts };
