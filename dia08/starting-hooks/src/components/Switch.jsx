import { useState } from "react"
const Switch = () => {
    const [state, setState] = useState(true)
    const textState = state ? 'ON' : 'OFF'
    const handleSwicth = () => {
      setState(!state)
    }
    return (
      <>
        <h1>Switcher</h1>
        <button onClick={handleSwicth} className={textState}>{textState}</button>
      </>
    )
  }
export default Switch