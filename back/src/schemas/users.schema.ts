import { z } from "zod";
import { announcementSchema } from "./adverts.schema";

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
    street: z.string().max(127),
    number: z.string().max(20),
    complement: z.string().max(50),
    city: z.string().max(127),
    state: z.string().max(127),
    cep: z.string().max(8),
});

const createUserSchema = userSchema.omit({
    id: true,
});

const updateUserSchema = createUserSchema.partial();

const returnUserSchema = userSchema.omit({
    password: true,
});

const returnUserWithAdverts = returnUserSchema.extend({
    adverts: z.array(announcementSchema),
});

export {
    userSchema,
    createUserSchema,
    returnUserSchema,
    updateUserSchema,
    returnUserWithAdverts,
};
