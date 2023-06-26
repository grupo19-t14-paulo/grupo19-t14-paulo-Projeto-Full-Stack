import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entity";

const deleteCommentService = async (commentId: string): Promise<void> => {
    const commentsRepository = AppDataSource.getRepository(Comment);

    const comment = await commentsRepository.findOneBy({
        id: commentId,
    });

    await commentsRepository.remove(comment!);
};

export { deleteCommentService };
