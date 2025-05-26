import { useEffect, useRef, useState } from "react";

const Previous = () => {
    const [counter, setCounter] = useState(0)
    const previousValue = useRef(0)

    useEffect(() => {
        previousValue.current = counter
    }, [counter])
    return ( 
        <div>
            <h2>Previous Value</h2>
            <p>Current: {counter}</p>
            <p>Previous: {previousValue.current}</p>
            <button onClick={() => setCounter(prev => prev + 1)}>+1</button>
            <button onClick={() => setCounter(prev => prev + 5)}>+5</button>
            <button onClick={() => setCounter(prev => prev + 3)}>+3</button>

        </div>
     );
}
 
export default Previous;