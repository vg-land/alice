import ProfileForm from "@/components/Form/ProfileForm"
import Layout from "@/components/Layout"
import React from "react"

interface Props {}

const ProfilePage = (props: Props) => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <ProfileForm></ProfileForm>
      </div>
    </Layout>
  )
}

export default ProfilePage
