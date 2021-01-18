import { Bubble } from "@chatui/core"
import React, { useEffect, useState } from "react"

interface Props {}

const JokeCard: React.FC<Props> = (props) => {
  const [joke, setJoke] = useState(null)
  const getJoke = async () => {
    const res = await fetch("/api/joke")
    const data = await res.text()
    setJoke(data)
  }
  useEffect(() => {
    getJoke()
    return () => {}
  }, [])

  return <Bubble>{joke}</Bubble>
}

export default JokeCard
