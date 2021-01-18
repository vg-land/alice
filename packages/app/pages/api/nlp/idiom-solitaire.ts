import prisma from "@/lib/prisma"
import { NextApiHandler } from "next"

// 成语接龙
const handler: NextApiHandler = async (req, res) => {
  const { k } = req.query
  const data = await prisma.idiom.findFirst({
    where: {
      word: {
        startsWith: k.toString(),
      },
    },
  })
  if (data) {
    res.json(data)
  } else {
    res.json({})
  }
}

export default handler
