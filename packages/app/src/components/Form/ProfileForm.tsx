import { Field, Form, Formik } from "formik"
import React from "react"

interface Props {
  source?: {
    email?: string
    name?: string
    phone?: string
  }
}

const ProfileForm = (props: Props) => {
  const { source } = props
  return (
    <Formik
      onSubmit={(value) => {
        console.log(value)
      }}
      initialValues={source}
    >
      {() => (
        <Form className="shadow-lg rounded-md w-80 bg-white dark:bg-gray-800 p-4 space-y-4">
          <h1 className="font-light self-center text-xl sm:text-2xl text-gray-600 dark:text-white mb-6 text-center">
            个人资料
          </h1>
          <div className="flex items-center space-x-4">
            <label className="w-12 block" htmlFor="name">
              用户名
            </label>
            <Field name="name" type="text" className="input" disabled></Field>
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-12 block" htmlFor="email">
              邮箱
            </label>
            <Field name="email" type="text" className="input" disabled></Field>
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-12 block" htmlFor="email">
              手机号
            </label>
            <Field name="phone" type="text" className="input"></Field>
          </div>
          <button type="submit" className="button">
            保存
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ProfileForm
