import { z } from "zod";
import { loginSchema } from "../schemas/session.schema";

type ILogin = z.infer<typeof loginSchema>;

export type { ILogin };