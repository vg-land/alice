import { NextApiHandler } from "next"
import NextAuth from "next-auth"
import Adapters from "next-auth/adapters"
import prisma from "lib/prisma"

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options = {
  providers: [],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
}
