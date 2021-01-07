import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"

const secretHandler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    res.json({
      code: 200,
      msg: `${session}`,
    })
  } else {
    res.statusCode = 403
    res.end("没有权限")
  }
}

export default secretHandler
