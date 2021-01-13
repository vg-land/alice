import Head from "next/head"
import React from "react"
import HomeLayout from "components/Layout"
import Date from "components/Date"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"

const Post = ({ postData }) => {
  return (
    <HomeLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      <Date>{postData.createdAt}</Date>
      <br />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </HomeLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/post/${params.id}`)
  const postData = await res.json()

  return {
    props: {
      postData,
    },
  }
}

export default Post
