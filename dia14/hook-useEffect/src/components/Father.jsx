import { useEffect, useState } from "react";

const Father = () => {

    const [isHere, setIsHere] = useState(false)
    const handleAppear = () => {
        setIsHere(!isHere)
    }
    return ( 
        <div>
            <button onClick={handleAppear}>Press</button>

            {isHere ? <Child /> : null}
        </div>
     );
}

const Child = () => {
    useEffect(() => {
        console.log("I have appeared !!!")

        return () => {
            console.log("Bye, bye !!")
        }
    })

    return(
        <h1>Hello !</h1>
    )
}
 
export default Father;