import { z } from "zod";

import {
    commentSchemaRequest,
    commentSchemaResponse,
    commentsSchemaResponse,
} from "../schemas/comments.schema";

type TCommentRequest = z.infer<typeof commentSchemaRequest>;

type TCommentResponse = z.infer<typeof commentSchemaResponse>;

type TCommentsResponse = z.infer<typeof commentsSchemaResponse>;

export { TCommentRequest, TCommentResponse, TCommentsResponse };
