import { useState } from "react"
const TaskList = () => {
    const [task, setTask] = useState("")
    const [listTask, setListTask] = useState(["Clean"])
    const addEvent = () => {
        setListTask((prevState) => [...prevState, task])
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
export default TaskList