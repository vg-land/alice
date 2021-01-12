import Layout from "@/components/Layout"
import dynamic from "next/dynamic"
import React from "react"
const Chat = dynamic(() => import("@/components/Chat"), { ssr: false })

const IndexPage = () => {
  return (
    <Layout>
      <Chat></Chat>
    </Layout>
  )
}

export default IndexPage
