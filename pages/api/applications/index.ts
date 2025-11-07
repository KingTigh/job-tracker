import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { getUserFromReq } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    const apps = await prisma.application.findMany({ where: { userId: user.id }, orderBy: { createdAt: 'desc' }});
    return res.json(apps);
  }

  if (req.method === 'POST') {
    const { company, position, status, location, link, appliedDate, notes } = req.body;
    const app = await prisma.application.create({
      data: { userId: user.id, company, position, status, location, link, appliedDate: appliedDate ? new Date(appliedDate) : null, notes }
    });
    return res.status(201).json(app);
  }

  return res.status(405).end();
}