const Header = (props) => {
  return (
    <div
      {...props}
      className={`${props.className} text-center bg-indigo-500 text-white flex h-12 items-center justify-between px-4`}
    >
      {props.children}
    </div>
  )
}

export default Header
