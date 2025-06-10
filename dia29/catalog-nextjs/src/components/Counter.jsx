"use client"
import { useState } from "react";
import { Button } from "./ui/Button";

const Counter = () => {
    const [num, setNum] = useState(0)
    return ( 
        <div>
            <Button onClick={() => setNum(prev => prev + 1)}>
                Click me: {num}
            </Button>
        </div>
     );
}
 
export default Counter;