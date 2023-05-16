import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.clearPreviewData();
  res.end('preview mode disabled');
};

export default handler;
