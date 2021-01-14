import Layout from "components/Layout"
import { Joke } from "@prisma/client"
import prisma from "lib/prisma"
import { GetServerSideProps } from "next"
import Link from "next/link"
import React from "react"

interface Props {
  source?: Joke[]
}

const JokePage = (props: Props) => {
  return (
    <Layout>
      <div className="mb-4">
        <Link href={`/joke/create`}>
          <button className="px-4 py-2 rounded shadow bg-indigo-500 text-white">
            新建
          </button>
        </Link>
      </div>
      <section className="space-y-2">
        {props.source.map((item) => (
          <Link href={`/joke/${item.id}`} key={item.id}>
            <div
              className="p-4 bg-gray-100 cursor-pointer"
              title={item.content}
            >
              {item.content}
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await prisma.joke.findMany({
    take: 10,
  })

  return {
    props: { source: JSON.parse(JSON.stringify(data)) },
  }
}

export default JokePage
