import React from "react"
import Chat, { Bubble, MessageProps, useMessages } from "@chatui/core"
// 引入样式
import "@chatui/core/dist/index.css"
import Head from "next/head"
import WeatherCard from "../Card/WeatherCard"

const initialMessages: Omit<MessageProps, "_id">[] = [
  {
    type: "text",
    content: { text: "主人好，我是智能助理，你的贴心小助手~" },
  },
  {
    type: "image",
    content: {
      picUrl: "https://picsum.photos/id/251/200/200",
    },
  },
  {
    type: "weather",
    content: {},
  },
]

// 默认快捷短语，可选
const defaultQuickReplies = [
  {
    icon: "apps",
    name: "天气",
    isHighlight: true,
  },
  {
    name: "当前地址",
    isNew: true,
  },
]

const ChatComponent = (props) => {
  const { messages, appendMsg, setTyping } = useMessages(initialMessages)

  const handleSend = (type, val) => {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      })

      setTyping(true)

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "亲，您遇到什么问题啦？请简要描述您的问题~" },
        })
      }, 1000)
    }
  }

  // 根据消息类型下渲染
  const renderMessageContent = (msg: MessageProps) => {
    const { type, content } = msg
    // 根据消息类型来渲染
    switch (type) {
      case "text":
        return <Bubble content={content.text} />
      case "image":
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        )
      case "weather":
        return <WeatherCard></WeatherCard>
      default:
        return null
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  const handleQuickReplyClick = (item) => {
    switch (item.name) {
      case "天气":
        appendMsg({
          type: "weather",
          content: {
            data: "xxx",
          },
        })
        break
      default:
        handleSend("text", item.name)
        break
    }
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />

        <script src="//g.alicdn.com/chatui/icons/0.2.7/index.js"></script>
      </Head>
      <Chat
        navbar={{ title: "智能助理" }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    </>
  )
}

export default ChatComponent
