import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.setPreviewData({});
  res.redirect(req.query.redirect as string);
};

export default handler;
