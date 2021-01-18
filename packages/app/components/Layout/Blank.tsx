import React from "react"

interface Props {}

const Blank: React.FC<Props> = (props) => {
  return <>{props.children}</>
}

export default Blank
