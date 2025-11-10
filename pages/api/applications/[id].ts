import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getUserFromReq } from "../../../lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const id = Number(req.query.id);
  const data = req.body;

  try {
    if (req.method === "PUT" || req.method === "PATCH") {
      const app = await prisma.application.updateMany({
        where: { id, userId: user.id },
        data,
      });
      return res.json(app);
    }

    if (req.method === "DELETE") {
      await prisma.application.deleteMany({ where: { id, userId: user.id } });
      return res.json({ ok: true });
    }

    // Any other method → 405
    return res.status(405).end();
  } catch (err) {
    console.error("Application update error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
