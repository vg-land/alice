import Link from "next/link"
import React from "react"

interface Props {}

const Register = (props: Props) => {
  return (
    <div
      className="h-screen w-full bg-cover flex justify-center items-center"
      style={{ background: "url(https://picsum.photos/id/645/2509/1673)" }}
    >
      <form className="max-w-sm p-10 bg-white bg-opacity-25 rounded-lg shadow-lg space-y-4">
        <p className="text-white mb-4 font-light text-center text-2xl">注册</p>
        <input
          type="text"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="account"
        />
        <input
          type="password"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="password"
        />
        <input
          type="password"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="password confirm"
        />
        <button
          type="submit"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          登录
        </button>
        <div className="text-center text-gray-500 font-light text-sm">
          已有账号？
          <Link href="/login">
            <a className="hover:text-gray-800">
              去登录
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
