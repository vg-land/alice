import { Field, Form, Formik, FormikHelpers } from "formik"
import { useRouter } from "next/router"
import React from "react"

interface Props {
  value?: JokeForm
  onSubmit?: (
    values: any,
    formikHelpers: FormikHelpers<any>,
  ) => void | Promise<any>
}

interface JokeForm {
  content: string
}

const JokeForm: React.FC<Props> = (props) => {
  const router = useRouter()

  return (
    <Formik
      initialValues={props.value}
      onSubmit={(values, action) => {
        props.onSubmit(values, action)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            component="textarea"
            cols={50}
            rows={8}
            placeholder="请输入"
            className="p-2 my-2 border-gray-300 border-2 rounded w-full"
            name="content"
            required
          />
          <div className="space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-500 text-white py-4 px-8 cursor-pointer"
            >
              保存
            </button>
            <button
              className="bg-gray-100 py-4 px-8"
            >
              取消
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

JokeForm.defaultProps = {
  value: {
    content: "",
  },
  onSubmit: () => {},
}

export default JokeForm
