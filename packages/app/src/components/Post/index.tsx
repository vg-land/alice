import dayjs from "dayjs"
import Link from "next/link"
import React from "react"

const Post: React.FC<{ post }> = ({ post }) => {
  return (
    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="w-1/3 bg-cover "
        style={{ background: "url(https://picsum.photos/id/637/200/200)" }}
      ></div>
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">{post.title}</h1>
        <p className="mt-2 text-gray-600 text-sm">{post.content}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-500 text-xs">
            {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </p>
          <Link href={`draft/${post.id}`}>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              编辑
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
