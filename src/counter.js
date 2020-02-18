import React, { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  let name = "likes"
  function updateCounter(e) {
    e.preventDefault()
    setCount(count + 1)
  }
  if (count === 1) {
    name = "like"
  }

  return (
    <button onClick={updateCounter} className="likesButton">
      {count} {name}
    </button>
  )
}

export default Counter
