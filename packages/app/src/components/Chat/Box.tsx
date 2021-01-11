import React from "react"
import ChatBot from "./ChatBot"

interface Props {}

const ChatBox = (props: Props) => {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
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
