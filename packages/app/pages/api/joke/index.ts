import prisma from "lib/prisma"
import { omit } from "lodash"
import { NextApiHandler } from "next"

const getRandom = (arr: any[]) => {
  const length = arr.length
  if (length) {
    const random = rank(0, length)
    return arr[random]
  }
  return
}

const rank = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const jokeHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      {
        try {
          const count = await prisma.joke.count()
          const number = rank(0, count)
          const data = await prisma.joke.findFirst({
            skip: number,
            take: 1,
          })
          if (data.content) res.json(data.content)
          else res.json("没找到笑话，你自己编一个吧")
        } catch {
          res.json("用的人太多，服务崩了")
        }
      }
      break
    case "POST":
      {
        const result = await prisma.joke.create({
          data: req.body,
        })
        res.json(result)
      }
      break
    case "PUT":
      {
        const result = await prisma.joke.update({
          where: {
            id: Number(req?.body?.id),
          },
          data: omit(req.body, "id"),
        })
        res.json(result)
      }
      break
    default:
      throw new Error("不支持的请求类型")
  }
}

export default jokeHandler
