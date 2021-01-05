import Head from "next/head"
import Nav from "../components/Nav"
import React from "react"
import Layout from "../components/Layout/Web"

export default function Home(props: any) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}
