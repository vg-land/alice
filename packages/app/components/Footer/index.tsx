import React from "react"

const Footer = (props: any) => {
  return (
    <footer className="flex items-center justify-center py-4 shadow-lg border-t" {...props}>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        给您拜个早年
      </a>
    </footer>
  )
}

export default Footer
