import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import Link from "next/link"
import React from "react"

interface Props {
  onSubmit?: () => void
  form?: {
    account: string
    password: string
  }
}

const handleLogin = async (value) => {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify(value),
  })
  console.log(res)
}

const LoginForm = (props: Props) => {
  return (
    <Formik
      initialValues={{
        account: "",
        password: "",
      }}
      onSubmit={async (
        values: FormikValues,
        { setSubmitting }: FormikHelpers<FormikValues>,
      ) => {
        await handleLogin(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm p-10 bg-white rounded-lg shadow-lg space-y-4">
          <p className="text-gray-900 mb-4 font-light text-center text-2xl">
            登录
          </p>
          <Field
            type="text"
            name="account"
            autoComplete="account"
            className="input"
            placeholder="账号"
          />
          <Field
            type="password"
            name="password"
            className="input"
            placeholder="密码"
          />
          <button type="submit" className="button" disabled={isSubmitting}>
            登录
          </button>
          <div className="text-center text-gray-500 font-light text-sm">
            没有账号？
            <Link href="/register">
              <a className="hover:text-gray-800">去注册</a>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
