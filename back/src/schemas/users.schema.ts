import { z } from "zod";

const userSchema = z.object({
    id: z.string(),
    name: z.string().min(2).max(127),
    email: z.string().email().max(127),
    cpf: z.string().max(11),
    phone: z.string().max(13),
    birthDate: z.date().or(z.string()),
    description: z.string().nullable(),
    password: z.string().min(4).max(127),
    type: z.string(),
});

const createUserSchema = userSchema.omit({
    id: true,
});

const updateUserSchema = createUserSchema.partial();

const returnUserSchema = userSchema.omit({
    password: true,
});

export { userSchema, createUserSchema, returnUserSchema, updateUserSchema };