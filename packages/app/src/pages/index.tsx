import Layout from "@/components/Layout"
import dynamic from "next/dynamic"
import React from "react"
const Chat = dynamic(() => import("@/components/Chat"), { ssr: false })

const IndexPage = () => {
  return (
    <div className="h-screen">
      <Chat></Chat>
    </div>
  )
}

export default IndexPage
