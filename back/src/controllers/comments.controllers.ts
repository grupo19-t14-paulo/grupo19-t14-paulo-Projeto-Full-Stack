import { Request, Response } from "express";
import { createCommentService } from "../services/comments/createComment.service";
import { TCommentRequest } from "../interfaces/comments.interfaces";
import { listAllCommentsForAnAdService } from "../services/comments/listAllCommentsForAnAd.service";
import { deleteCommentService } from "../services/comments/deleteComment.service";
import { retrieveComment } from "../services/comments/retrieveComment.service";
import { updateComment } from "../services/comments/updateComment.service";

const listAllCommentsForAnAdController = async (
    req: Request,
    res: Response
) => {
    const advertId: string = req.params.id;

    const comments = await listAllCommentsForAnAdService(advertId);

    return res.json(comments);
};

const createCommentController = async (req: Request, res: Response) => {
    const userId: string = res.locals.userId;

    const advertId: string = req.params.id;

    const commentData: TCommentRequest = req.body;

    const comment = await createCommentService(advertId, userId, commentData);

    return res.status(201).json(comment);
};

const retrieveCommentController = async (req: Request, res: Response) => {
    const commentId: string = req.params.id;

    const comment = await retrieveComment(commentId);

    return res.json(comment);
};

const updateCommentController = async (req: Request, res: Response) => {
    const commentId: string = req.params.id;

    const commentData: TCommentRequest = req.body;

    const comment = await updateComment(commentId, commentData);

    return res.json(comment);
};

const deleteCommentController = async (req: Request, res: Response) => {
    const commentId: string = req.params.id;

    await deleteCommentService(commentId);

    return res.status(204).send();
};

export {
    listAllCommentsForAnAdController,
    createCommentController,
    retrieveCommentController,
    updateCommentController,
    deleteCommentController,
};
