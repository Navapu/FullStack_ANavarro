import { useState } from "react"
const Timer = () => {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    const handleStart = () => {
        if (isActive) return;

        setIsActive(true)
        const id = setInterval(() => {
            setTime((prev) => {
                const next = prev + 0.1;
                return Math.round(next * 100) / 100;
            });
        }, 100);
        setIntervalId(id)
    }

    const handleStop = () => {
        clearInterval(intervalId)
        setIsActive(false)
    }

    const handleReset = () => {
        setTime(0)
    }

    return (
        <div className='movie-section'>
            <h1>Timer</h1>
            <h2>{time}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Timer