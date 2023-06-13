import { z } from "zod";

const loginFormSchema = z.object({
    email: z.string().email("Forneça um e-mail válido").min(10).max(45),
    password: z.string().min(4, "Obrigatório e precisa conter pelo menos 4 caracteres.").max(127)
});

export type TFormPropsLogin = z.infer<typeof loginFormSchema>;

export {
    loginFormSchema
};