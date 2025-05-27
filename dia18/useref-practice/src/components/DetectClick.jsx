import { useEffect, useRef } from "react";

const DetectClick = () => {
    const mydiv = useRef();

    useEffect(() => {
        window.addEventListener('click', function(e){
            if(mydiv.current.contains(e.target)){
                alert("I told you !!")
            }
        })
    },[])

    return ( 
        <div ref={mydiv} className="mydiv">
            <h1>Detect Clicker</h1>
            <h3>Don't click on this component</h3>
        </div>
     );
}
 
export default DetectClick;