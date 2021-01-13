import RegisterForm from "components/Form/RegisterForm"
import React from "react"

interface Props {}

const Register = (props: Props) => {
  return (
    <div
      className="h-screen w-full bg-cover flex justify-center items-center"
      style={{ background: "url(https://picsum.photos/id/645/2509/1673)" }}
    >
      <RegisterForm></RegisterForm>
    </div>
  )
}

export default Register
