import { z } from "zod";
import { sendEmailSchema } from "../schemas/sendEmail.schema";

type IEmailRequest = z.infer<typeof sendEmailSchema>;

export { IEmailRequest };
