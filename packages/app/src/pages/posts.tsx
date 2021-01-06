import Link from "next/link"
import React from "react"
import HomeLayout from "@/components/Layout"
import PostCard from "@/components/Post/PostCard"
import { GetServerSideProps } from "next"

const Posts = (props: any) => {
  const { feed } = props
  return (
    <HomeLayout>
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
