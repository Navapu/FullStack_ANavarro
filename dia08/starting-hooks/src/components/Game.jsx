import { useState } from "react"
const Game = ({ randomnumber }) => {
    const [userNumber, setUserNumber] = useState(0)
    const [state, setState] = useState("")

    const checkNumber = () => {
        if (userNumber > randomnumber) {
            setState("Lower")
        } else if (userNumber < randomnumber) {
            setState("Higher")
        } else {
            setState("You are right !!")
        }
    }
    return (
        <div className='div-number'>
            <h1>Guess the number</h1>
            <input type="number" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
            <button onClick={checkNumber}>Check</button>
            <p>{state}</p>
        </div>
    )
}
export default Game;