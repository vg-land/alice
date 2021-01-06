import prisma from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const postId = req.query.id
  if (req.method === "GET") {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    })
    res.json(post)
  } else if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    })
    res.json(post)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    )
  }
}
