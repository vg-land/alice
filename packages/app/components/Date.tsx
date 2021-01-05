import dayjs from "dayjs"
import React from "react"

const Date = (props: any) => {
  const date = props.children
  return (
    <time dateTime={date}>{dayjs(date).format("YYYY-MM-DD HH:mm:ss")}</time>
  )
}

export default Date
