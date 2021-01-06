import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const links = [
  { label: "Home", url: "/" },
  { label: "Post", url: "/posts" },
]

const Nav = (props: any) => {
  const { route } = useRouter()
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
            <Link href="/login">
              <button
                type="button"
                className="flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
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
              </button>
            </Link>
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
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links?.map((item) => {
            return (
              <Link href={item.url} key={item.label}>
                <a
                  className={`${
                    route === item.url ? "text-gray-800" : "text-gray-300"
                  } hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {item.label}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Nav
