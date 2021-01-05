import React from "react"
import Footer from "../Footer"
import Nav from "../Nav"

const WebLayout = (props: any) => {
  return (
    <>
      <Nav className="max-w-screen-lg"></Nav>
      <main className="max-w-screen-lg mx-auto p-8 min-h-screen" {...props}>
        {props.children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default WebLayout
