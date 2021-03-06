import Link from "next/link"
import React from "react"
import HomeLayout from "components/Layout"
import PostCard from "components/Post/PostCard"
import { GetServerSideProps } from "next"

const Posts = (props: any) => {
  const { feed } = props
  return (
    <HomeLayout>
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
        {feed?.map((item) => {
          return (
            <Link href={`/posts/${item.id}`} key={item.id}>
              <a>
                <PostCard value={item}></PostCard>
              </a>
            </Link>
          )
        })}
      </div>
    </HomeLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed")
  const feed = await res.json()
  return {
    props: {
      feed,
    },
  }
}
export default Posts
