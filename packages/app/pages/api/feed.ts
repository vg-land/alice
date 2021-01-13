import prisma from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const posts = await prisma.post.findMany({
    where: { published: true },
  })

  res.json(posts)
}
