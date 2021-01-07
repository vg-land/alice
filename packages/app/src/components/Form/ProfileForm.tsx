import { useSession } from "next-auth/client"
import React from "react"

interface Props {}

const ProfileForm = (props: Props) => {
  const [session, loading] = useSession()
  console.log(session)
  return (
    <div className="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
      <img
        alt="profile"
        src="https://picsum.photos/id/480/200/200"
        className="rounded-t-lg h-28 w-full mb-4 object-cover"
      />
      <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" className="block relative">
          <img
            alt="profile"
            src={session?.user?.image}
            className="mx-auto rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
          />
        </a>
        <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
          {session?.user?.name}
        </p>
        <p className="text-gray-400 text-xs mb-4">{session?.user?.email}</p>
        <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
          大会员
        </p>
        <div className="rounded-lg p-2 w-full mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
            <p className="flex flex-col">
              文章
              <span className="text-black dark:text-white font-bold">34</span>
            </p>
            <p className="flex flex-col">
              关注
              <span className="text-black dark:text-white font-bold">455</span>
            </p>
            <p className="flex flex-col">
              点赞
              <span className="text-black dark:text-white font-bold">230</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
