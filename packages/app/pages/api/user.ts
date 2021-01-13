import prisma from "lib/prisma"
import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"

const userHandler: NextApiHandler = async (req, res) => {
  const { user } = await getSession({ req })
  const userInfo = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  })
  res.json(userInfo)
}

export default userHandler
