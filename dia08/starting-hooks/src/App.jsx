import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <Counter />
      <Switch />
      <InputEvents />
      <TaskList />
    </>
  )
}

const Counter = () => {
  const [num, setNumber] = useState(0)
  const handleSum = () => {
    setNumber(num + 1);
  }
  const handleSub = () => {
    setNumber(num - 1);
  }
  const handleReset = () => {
    setNumber(0)
  }
  return (
    <>
      <h1>Num is: {num}</h1>
      <button onClick={handleSum}>+1</button>
      <button onClick={handleSub}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

const Switch = () => {
  const [state, setState] = useState(true)
  const textState = state ? 'ON' : 'OFF'
  const handleSwicth = () => {
    setState(!state)
  }
  return (
    <>
      <h1>Switcher</h1>
      <button onClick={handleSwicth} className={textState}>{textState}</button>
    </>
  )
}

const InputEvents = () => {
  const [message, setMessage] = useState("Hello world")

  return (
    <>
      <h1>Inputs</h1>
      <input value={message} type="text" onChange={(e) => setMessage(e.target.value)}
        onMouseOver={() => setMessage("You are on the input")}
        onMouseOut={() => setMessage("You are not on the input")}
      />
    </>
  )
}

const TaskList = () => {
  const [task, setTask] = useState("")
  const [listTask, setListTask] = useState(["Clean"])
  const addEvent = () => {
    setListTask([...listTask, task])
    setTask("")
  }
  return (
    <div className='tasklist'>
      <h1>Task List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addEvent}>Add</button>
      <ul>
        {listTask.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
      </ul>
    </div>
  )
}

export default App
