import React from "react"

const Alice = (props: any) => {
  return (
    <main className="container mx-auto">
      <div></div>
      <div className="text-center">
        <input type="text" className="border px-2" defaultValue={props.value} />
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

export default Alice
