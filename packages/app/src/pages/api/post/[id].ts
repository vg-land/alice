import prisma from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req
  const postId = req.query.id
  switch (method) {
    case "GET":
      {
        const post = await prisma.post.findUnique({
          where: {
            id: Number(postId),
          },
        })
        res.json(post)
      }

      break

    case "DELETE":
      {
        const post = await prisma.post.delete({
          where: { id: Number(postId) },
        })
        res.json(post)
      }
      break
    default: {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      )
    }
  }
}
