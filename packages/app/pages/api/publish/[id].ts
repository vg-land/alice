import prisma from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "PUT":
      {
        const postId = req.query.id
        const post = await prisma.post.update({
          where: { id: Number(postId) },
          data: { published: true },
        })
        res.json(post)
      }
      break
  }
}
