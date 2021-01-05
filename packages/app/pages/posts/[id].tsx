import Head from "next/head"
import React from "react"
import WebLayout from "../../components/Layout/Web"
import Date from "../../components/Date"
import { getAllPostIds, getPostData } from "../../lib/posts"

const Post = ({ postData }) => {
  return (
    <WebLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.id}
      <br />
      {postData.title}
      <br />
      <Date>{postData.date}</Date>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </WebLayout>
  )
}

export async function getStaticPaths(params: any) {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export default Post
