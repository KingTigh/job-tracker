import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { getUserFromReq } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const id = Number(req.query.id);
  if (req.method === 'PUT') {
    const data = req.body;
    const app = await prisma.application.updateMany({
      where: { id, userId: user.id },
      data
    });
    return res.json(app);
  }

  if (req.method === 'DELETE') {
    await prisma.application.deleteMany({ where: { id, userId: user.id }});
    return res.json({ ok: true });
  }

  return res.status(405).end();
}