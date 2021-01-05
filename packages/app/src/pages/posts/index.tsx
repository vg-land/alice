import Link from "next/link"
import React from "react"
import WebLayout from "../../components/Layout/Web"
import PostCard from "../../components/Post/PostCard"
import { getSortedPostsData } from "../../../lib/posts"

const Posts = (props: any) => {
  const { allPostsData } = props
  return (
    <WebLayout>
      <div className="flex items-center justify-between mb-8 mx-4">
        <p className="text-4xl font-bold text-gray-800">文章列表</p>
        <div className="text-end">
          <form className="flex w-full max-w-sm space-x-3">
            <input
              type="text"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Enter a title"
            />
            <button
              className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              查询
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 container mx-auto">
        {allPostsData?.map((item) => {
          return (
            <Link href={`/posts/${item.id}`} key={item.id}>
              <a>
                <PostCard value={item}></PostCard>
              </a>
            </Link>
          )
        })}
      </div>
    </WebLayout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
export default Posts
