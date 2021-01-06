import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik"
import Link from "next/link"
import React from "react"

const LoginForm = (props: any) => {
  const { form = { email: "", password: "" } } = props
  return (
    <Formik
      initialValues={form}
      onSubmit={(
        values: FormikValues,
        { setSubmitting }: FormikHelpers<FormikValues>,
      ) => {
        setTimeout(() => {
          console.log(values)
          setSubmitting(false)
        }, 2000)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm p-10 bg-white bg-opacity-25 rounded-lg shadow-lg space-y-4">
          <p className="text-white mb-4 font-light text-center text-2xl">
            登录
          </p>
          <Field
            type="text"
            name="email"
            className="input"
            placeholder="账号"
          />
          <ErrorMessage name="email" component="div"></ErrorMessage>
          <Field
            type="password"
            name="password"
            className="input"
            placeholder="密码"
          />
          <ErrorMessage name="password" component="div"></ErrorMessage>
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
