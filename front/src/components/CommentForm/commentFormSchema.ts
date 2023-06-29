import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const CommentSchema = z.object({
  id: z.string(),
  comment: z.string(),
  created_at: z.string(),
  user: UserSchema,
}).omit({
  id: true,
  created_at: true,
  user: true,
})

export type TCommentFormProps = z.infer<typeof CommentSchema>;

export {
    CommentSchema
};