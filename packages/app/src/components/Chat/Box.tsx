import React from "react"
import ChatBot from "./ChatBot"

interface Props {}

const ChatBox = (props: Props) => {
  const steps = [
    {
      id: "0",
      message: "Welcome to react chatbot!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Bye!",
      end: true,
    },
  ]
  return (
    <>
      <ChatBot steps={steps}></ChatBot>
    </>
  )
}

export default ChatBox
