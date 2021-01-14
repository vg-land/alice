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
  {
    name: "随机图片",
    isNew: true,
    handleClick: ({ ctx }) => {
      const { appendMsg } = ctx
      const random = Math.random().toString(32).slice(2)
      appendMsg({
        type: "image",
        content: {
          picUrl: `//picsum.photos/300/200?random=${random}`,
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
]
