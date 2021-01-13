import { MessageProps } from "@chatui/core"
import JokeCard from "../Card/JokeCard"
import WeatherCard from "../Card/WeatherCard"
import Help from "./components/Help"

// 默认快捷短语，可选
export const defaultQuickReplies: any[] = [
  {
    icon: "apps",
    name: "天气",
    handleClick: ({ ctx, val }) => {
      const { appendMsg, setTyping } = ctx
      appendMsg({
        type: "text",
        content: {
          text: "目前没有真实数据，只是模拟的",
        },
      })
      setTyping(true)
      appendMsg({
        type: "component",
        content: {
          render: WeatherCard,
        },
      })
    },
  },
  {
    name: "帮助",
    isNew: true,
    isHighlight: true,
    handleClick: ({ ctx }) => {
      const { appendMsg } = ctx
      appendMsg({
        type: "component",
        content: {
          render: Help,
        },
      })
    },
  },
  {
    name: "讲个笑话",
    isNew: true,
    handleClick: ({ ctx }) => {
      const { appendMsg } = ctx
      appendMsg({
        type: "component",
        content: {
          render: JokeCard,
        },
      })
    },
  },
]

// 默认消息
export const initialMessages: Omit<MessageProps, "_id">[] = [
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
