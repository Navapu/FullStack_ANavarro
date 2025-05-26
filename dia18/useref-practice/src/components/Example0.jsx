import { useEffect, useRef, useState } from "react";
const Example0 = () => {
    const [name, setName] = useState('')
    const counter2 = useRef(0)
    
    useEffect (() => {
        counter2.current = counter2.current + 1
    })
    return ( 
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <h3>{name}</h3>

            <p>Render: {counter2.current}</p>
        </div>
    );
}
 
export default Example0;