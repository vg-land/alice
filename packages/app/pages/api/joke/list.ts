import prisma from "lib/prisma"
import { NextApiHandler } from "next"

const jokeHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      {
        const result = await prisma.joke.findMany({
          skip: 0,
          take: 20,
          orderBy: {
            updatedAt: "desc",
          },
        })
        res.json(result)
      }
      break
    default:
      throw new Error("不支持的请求类型")
  }
}

export default jokeHandler
