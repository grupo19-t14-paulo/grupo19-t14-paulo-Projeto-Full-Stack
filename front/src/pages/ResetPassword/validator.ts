import { z } from "zod";

export const sendEmailResetPasswordSchema = z.object({
    email: z.string().email("Deve ser um e-mail válido"),
});

export const resetPasswordSchema = z
    .object({
        password: z.string().nonempty("Senha é obrigatória"),
        passwordConfirm: z
            .string()
            .min(1, "A confirmação de senha é obrigatória"),
    })
    .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
        message: "A confirmação de senha não confere com a nova senha.",
        path: ["passwordConfirm"],
    });

export type SendEmailResetPasswordData = z.infer<
    typeof sendEmailResetPasswordSchema
>;
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
