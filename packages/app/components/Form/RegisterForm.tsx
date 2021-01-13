import Link from "next/link"
import React from "react"

interface Props {}

const RegisterForm = (props: Props) => {
  return (
    <form className="max-w-sm p-10 bg-white bg-opacity-25 rounded-lg shadow-lg space-y-4">
      <p className="text-white mb-4 font-light text-center text-2xl">注册</p>
      <input type="text" className="input" placeholder="account" />
      <input type="password" className="input" placeholder="password" />
      <input type="password" className="input" placeholder="password confirm" />
      <button
        type="submit"
        className="button"
      >
        登录
      </button>
      <div className="text-center text-gray-500 font-light text-sm">
        已有账号？
        <Link href="/login">
          <a className="hover:text-gray-800">去登录</a>
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
