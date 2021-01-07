import LoginForm from "@/components/Form/LoginForm"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"
import React from "react"

interface Props {}

const Login = (props: Props) => {
  const router = useRouter()
  return (
    <div className="h-screen w-full bg-cover flex justify-center items-center bg-gray-200">
      <LoginForm onSubmit={() => router.replace("/")}></LoginForm>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}

export default Login
