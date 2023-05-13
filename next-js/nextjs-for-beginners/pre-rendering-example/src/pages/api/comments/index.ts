import type { NextApiHandler } from 'next';
import { comments } from '@/data/comments';

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(comments);
};

export default handler;
