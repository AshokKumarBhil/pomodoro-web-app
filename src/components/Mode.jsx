import { useState } from "react"

function Mode() {
    const [mode , setMode] = useState("focus");
  return (
    <div><h2>{mode}</h2></div>
  )
}

export default Mode