import React from "react"
import PostCard from "../components/Post/PostCard"

const Posts = (props: any) => {
  return (
    <div className="container mx-auto bg-white p-12">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
            Lastest articles
          </p>
        </div>
        <div className="text-end">
          <form className="flex w-full max-w-sm space-x-3">
            <div className=" relative ">
              <input
                type="text"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter a title"
              />
            </div>
            <button
              className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 container mx-auto">
        {Array(10)
          .fill("")
          .map((item, index) => {
            return <PostCard key={index}></PostCard>
          })}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      value: "Hello World",
    },
  }
}

export default Posts
