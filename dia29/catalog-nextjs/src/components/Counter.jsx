"use client"
import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0)
    return ( 
        <div>
            <button onClick={() => setNum(prev => prev + 1)}>Click me: {num}</button>
        </div>
     );
}
 
export default Counter;