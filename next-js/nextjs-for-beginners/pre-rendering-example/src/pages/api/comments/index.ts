import type { NextApiHandler } from 'next';
import { comments } from '@/data/comments';
import { Comment } from '@/types';

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(comments);
    return;
  }

  if (req.method === 'POST') {
    const comment = req.body;
    console.log({ comment });
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
    return;
  }
};

export default handler;
