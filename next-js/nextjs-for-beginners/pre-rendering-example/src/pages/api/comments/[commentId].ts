import type { NextApiHandler } from 'next';
import { comments } from '@/data/comments';

const handler: NextApiHandler = (req, res) => {
  const { commendId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(String(commendId)),
    res.status(200).json(comments),
  );
};

export default handler;
