import React from "react"

interface Props {}

const ChatBox = (props: Props) => {
  return (
    <>
      <div className="p-4 bg-white rounded h-64">
        <div className="">
          <div className="bg-gray-200 text-white p-2 px-4">111</div>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
          请输入内容
      </div>
    </>
  )
}

export default ChatBox
