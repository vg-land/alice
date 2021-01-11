import ProfileForm from "@/components/Form/ProfileForm"
import Layout from "@/components/Layout"
import React from "react"
import useSWR from "swr"

interface Props {}

const ProfilePage = (props: Props) => {
  const { data } = useSWR("/api/user")
  return (
    <Layout>
      <div className="flex items-center justify-center">
        {data && <ProfileForm source={data}></ProfileForm>}
      </div>
    </Layout>
  )
}

export default ProfilePage
