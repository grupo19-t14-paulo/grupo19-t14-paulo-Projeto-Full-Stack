import { z } from "zod";
import { userForComment } from "./users.schema";
import { advertForComment } from "./adverts.schema";

const commentSchema = z.object({
    id: z.string(),
    comment: z.string().max(2000),
    created_at: z.date(),
});

const commentSchemaRequest = commentSchema.omit({
    id: true,
    created_at: true,
});

const commentSchemaResponse = commentSchema.extend({
    user: userForComment,
    advert: advertForComment,
});

const commentsSchemaResponse = z.array(commentSchemaResponse);

export {
    commentSchema,
    commentSchemaRequest,
    commentSchemaResponse,
    commentsSchemaResponse,
};
