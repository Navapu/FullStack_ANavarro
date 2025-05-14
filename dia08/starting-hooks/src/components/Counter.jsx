import { useState } from "react";
const Counter = () => {
    const [num, setNumber] = useState(0)
    const handleSum = () => {
      setNumber((prevState) => prevState + 1);
    }
    const handleSub = () => {
      setNumber((prevState) => prevState - 1);
    }
    const handleReset = () => {
      setNumber(0)
    }
    return (
      <>
        <h1>Num is: {num}</h1>
        <button onClick={handleSum}>+1</button>
        <button onClick={handleSub}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </>
    )
  }
export default Counter