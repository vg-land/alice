import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "POST":
      res.setHeader("Cookie", ["auth=test"])
      res.json({
        code: 200,
        msg: "success",
      })
      break
    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      )
  }
}

export default handler
