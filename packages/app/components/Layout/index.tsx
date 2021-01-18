import React from "react"
import Footer from "../Footer"
import Nav from "./Nav"

interface Props {}

const HomeLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Nav></Nav>
      <main className="max-w-screen-lg mx-auto p-8 min-h-screen" {...props}>
        {props.children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default HomeLayout
