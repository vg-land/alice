import { signIn, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import React, { useState } from "react"
import ProfileCard from "components/Card/ProfileCard"
import dynamic from "next/dynamic"
const Popover = dynamic(() => import("components/Popover"), { ssr: false })

interface Props {}

const Avatar = (props: Props) => {
  const [session] = useSession()
  const router = useRouter()

  const [hover, setHover] = useState(false)
  return (
    <>
      <Popover
        isOpen={hover}
        content={<ProfileCard source={session?.user}></ProfileCard>}
        positions={["bottom"]}
        reposition={false}
      >
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          type="button"
          className="flex items-center justify-center p-2 rounded-full"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => {
            session ? router.push("/profile") : signIn()
          }}
        >
          {session?.user?.image ? (
            <img
              src={session.user.image}
              alt="avatar"
              className="w-10 h-10 rounded-full shadow"
            />
          ) : (
            <svg
              width="20"
              fill="currentColor"
              height="20"
              className="text-gray-800"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
            </svg>
          )}
        </button>
      </Popover>
    </>
  )
}

export default Avatar
