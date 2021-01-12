import React from "react"

const Footer = (props) => {
  return (
    <footer className="flex items-center justify-between">
      {props.children}
    </footer>
  )
}

export default Footer
