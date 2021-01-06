import LoginForm from "@/components/Form/LoginForm"
import React from "react"

interface Props {}

const Login = (props: Props) => {
  return (
    <div className="h-screen w-full bg-cover flex justify-center items-center bg-blue-400 bg-opacity-30">
      <LoginForm></LoginForm>
    </div>
  )
}

export default Login
