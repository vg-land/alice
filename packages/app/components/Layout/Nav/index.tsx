import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import Avatar from "./Avatar"

const links = [
  { label: "Home", url: "/" },
  { label: "Post", url: "/posts" },
]

interface Props {}

const Nav: React.FC<Props> = (props) => {
  const router = useRouter()
  const { route } = router
  const [session, loading] = useSession()
  return (
    <nav className="bg-white dark:bg-gray-800 shadow mx-auto ">
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className=" flex items-center">
            <a className="flex-shrink-0" href="/">
              <img className="h-8 w-8" src="/rocket.svg" alt="logo" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links?.map((item) => {
                  return (
                    <Link href={item.url} key={item.label}>
                      <a
                        className={`${
                          route === item.url ? "text-gray-800" : "text-gray-300"
                        } hover:text-gray-800 dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        {item.label}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            {/* 用户头像 */}
            <Avatar></Avatar>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="text-gray-800 hover:text-gray-400 dark:text-white  inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
