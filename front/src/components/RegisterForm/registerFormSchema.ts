import z from "zod";

const registerFormSchema = z.object({
    name: z.string().min(3, "Obrigatório e precisa conter pelo menos 3 caracteres.").max(127),
    email: z.string().email("Forneça um e-mail válido").max(127, "O nome precisa ter no máximo 127 caracteres."),
    cpf: z.string().max(11, "Digite 11 números sem caracteres"),
    phone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    birthDate: z.string().min(10, "Obrigatório informar data de nascimento"),
    description: z.string(),
    type: z.union([
        z.literal("Vendedor"),
        z.literal("Cliente")
    ]),
    street: z.string().max(127),
    number: z.string().max(20),
    complement: z.string().max(50),
    city: z.string().max(127),
    state: z.string().max(127),
    cep: z.string().max(8, "Digite 8 números sem caracteres"),
    password: z.string().min(4, "Obrigatório e precisa conter pelo menos 4 caracteres.").max(127),
    confirm: z.string().nonempty("É obrigatório confirmar a senha"),
    }).refine(({password, confirm}) => password === confirm, {
    message: "A confirmação de senha precisa corresponder com a senha.",
    path: ["confirm"]

});


export type TFormProps = z.infer<typeof registerFormSchema>

export {
    registerFormSchema
};