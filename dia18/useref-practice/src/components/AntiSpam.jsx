import { useRef } from "react";

const AntiSpam = () => {
    const isClick = useRef(false);

    const handleClick = () => {
        if(isClick.current) return;
        isClick.current = true;
        console.log("Sending data ...")
        setTimeout(() => {
            isClick.current = false
        }, 2000)
    }
    return ( 
        <div>
            <h1>AntiSpam</h1>
            <button onClick={handleClick}>Send</button>
        </div>
     );
}
 
export default AntiSpam;