import React from "react"

const Footer = (props: any) => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-4">
      <ul className="max-w-screen-lg mx-auto text-lg font-light flex flex-wrap justify-between">
        <li className="my-2">
          <a
            className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            href="https://github.com/vg-land"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
