import { NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';
import prisma from './prisma';
import { parse } from 'cookie';

export async function getUserFromReq(req: NextApiRequest) {
  const cookie = req.headers.cookie;
  if (!cookie) return null;
  const { token } = parse(cookie);
  if (!token) return null;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    return user;
  } catch {
    return null;
  }
}
