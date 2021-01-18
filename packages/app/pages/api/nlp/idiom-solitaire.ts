import prisma from "@/lib/prisma"
import { NextApiHandler } from "next"

// 成语接龙
const handler: NextApiHandler = async (req, res) => {
  try {
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
    }
  } catch {
    res.json({})
  }
}

export default handler
