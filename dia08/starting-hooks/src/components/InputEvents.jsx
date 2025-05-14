import { useState } from "react"
const InputEvents = () => {
    const [message, setMessage] = useState("Hello world")
  
    return (
      <>
        <h1>Inputs</h1>
        <input value={message} type="text" onChange={(e) => setMessage(e.target.value)}
          onMouseOver={() => setMessage("You are on the input")}
          onMouseOut={() => setMessage("You are not on the input")}
        />
      </>
    )
  }
export default InputEvents