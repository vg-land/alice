import Layout from "components/Layout"
import JokeForm from "components/Form/JokeForm"
import { useRouter } from "next/router"

const JokeCreate: React.FC = () => {
  const router = useRouter()
  const handleSubmit = async (values, { setSubmitting }) => {
    if (!values.content) {
      return
    }
    setSubmitting(true)
    await fetch(`/api/joke`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    setSubmitting(false)
    router.back()
  }

  return (
    <Layout>
      <h1>新增笑话</h1>
      <JokeForm onSubmit={handleSubmit}></JokeForm>
    </Layout>
  )
}

export default JokeCreate
