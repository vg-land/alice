import LoginForm from "@/components/Form/LoginForm"
import React from "react"

interface Props {}

const Login = (props: Props) => {
  return (
    <div
      className="h-screen w-full bg-cover flex justify-center items-center"
      style={{ background: "url(https://picsum.photos/id/645/2509/1673)" }}
    >
      <LoginForm></LoginForm>
    </div>
  )
}

export default Login
