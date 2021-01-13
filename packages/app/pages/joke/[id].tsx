import React, { useState } from "react"
import Layout from "components/Layout"
import JokeForm from "components/Form/JokeForm"
import { GetServerSideProps } from "next"
import prisma from "lib/prisma"
import { Joke } from "@prisma/client"
import { useRouter } from "next/router"

interface Props {
  data: Joke
}

const JokeUpdate: React.FC<Props> = (props) => {
  const router = useRouter()

  const handleSubmit = async (values: Joke) => {
    await fetch("/api/joke", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    router.back()
  }
  return (
    <Layout>
      <h1>编辑笑话</h1>
      <JokeForm onSubmit={handleSubmit} value={props.data}></JokeForm>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await prisma.joke.findUnique({
    where: {
      id: Number(params.id),
    },
  })
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  }
}

export default JokeUpdate
