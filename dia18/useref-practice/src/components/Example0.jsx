import { useEffect, useRef, useState } from "react";
const Example0 = () => {
    const [name, setName] = useState('')
    const counter2 = useRef(0)
    
    useEffect (() => {
        counter2.current = counter2.current + 1
    })

    const inputRef = useRef();
    const handleAction = () => {
        inputRef.current.focus();
        inputRef.current.value = "Hello: " + counter2.current;
    }
    return ( 
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <h3>{name}</h3>

            <p>Render: {counter2.current}</p>


            <input type="text" ref={inputRef} value={name}/>
            <button onClick={handleAction}>Action</button>
        </div>
    );
}
 
export default Example0;