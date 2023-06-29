import { z } from "zod";

const sendEmailSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  text: z.string(),
});

const emailSchema = z.object({
  email: z.string().email().max(127),
});

const passwordSchema = z.object({
  password: z.string().min(4).max(127),
});

export { sendEmailSchema, emailSchema, passwordSchema };
