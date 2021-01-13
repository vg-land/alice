import React from "react"
import { GetServerSideProps } from "next"
import Layout from "components/Layout"
import Post from "components/Post"
import prisma from "lib/prisma"

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const drafts = await prisma.post.findMany({
    where: {
      published: false,
    },
  })

  return {
    props: { drafts: JSON.parse(JSON.stringify(drafts)) },
  }
}

type Props = {
  drafts: any[]
}

const Drafts: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        {props.drafts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </Layout>
  )
}

export default Drafts
