import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ name: 'Home API route' });
};

export default handler;
