import type { NextApiHandler } from 'next';
import { comments } from '@/data/comments';
import type { Comment } from '@/types';

const findComment = (id: string | string[] | undefined): Comment | undefined =>
  comments.find((comment) => comment.id === parseInt(String(id)));

const handler: NextApiHandler = (req, res) => {
  const { commentId } = req.query;

  if (req.method === 'GET') {
    const comment = findComment(commentId);
    res.status(200).json(comment);
    return;
  }

  if (req.method === 'DELETE') {
    const commentToDelete = findComment(commentId);
    const index = comments.findIndex(
      (item) => item.id === parseInt(String(commentId)),
    );
    comments.splice(index, 1);
    res.status(200).json({
      comments: JSON.stringify(commentToDelete),
    });
    return;
  }

  if (req.method === 'PATCH') {
    const commentToEdit = findComment(commentId);

    if (!commentToEdit) {
      res.status(404).json('Comment not found');
      return;
    }

    commentToEdit.text = req.body;
    res.status(201).json(commentToEdit);
  }
};

export default handler;
