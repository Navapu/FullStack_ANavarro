import { use, useState } from 'react'
import './App.css'
import { imageGallery } from './data/gallerydata'
function App() {


  return (
    <>
      <Counter />
      <Switch />
      <InputEvents />
      <TaskList />
      <Form />
      <Gallery />
    </>
  )
}

const Counter = () => {
  const [num, setNumber] = useState(0)
  const handleSum = () => {
    setNumber((prevState) => prevState + 1);
  }
  const handleSub = () => {
    setNumber((prevState) => prevState - 1);
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

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  const handleSubmit = (e) => {
    const { name, email } = formData
    e.preventDefault();
    if (name.trim() == "" || email.trim() == "") { return; }
    if (!email.includes('@') || !email.includes('.')) { return; }

    alert('Name: ' + name + ', Email: ' + email)
    console.log('Name: ' + name + ', Email: ' + email)
  }

  const handleChange = (e) => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return (
    <form className='tasklist' onSubmit={handleSubmit}>
      <h1>Form</h1>
      <input type="text" value={formData.name} onChange={handleChange} placeholder='Name' name='name' />
      <input type="email" value={formData.email} onChange={handleChange} placeholder='Email' name='email' />
      <button type='submit'>Send</button>
    </form>
  )
}

const Gallery = () => {
  const [position, setPosition] = useState(0)

  const handlePrevious = () => {
    if (position - 1 === -1) {
      setPosition(imageGallery.length - 1)
    } else {
      setPosition(prevState => prevState - 1)
    }
  }

  const handleNext = () => {
    if (position + 1 === imageGallery.length) {
      setPosition(0)
    } else {
      setPosition(prevState => prevState + 1)
    }
  }
  return (
    <div className='movie-section'>
      <img src={imageGallery[position].url} className='movie-img' />
      <h2>{imageGallery[position].title}</h2>

      <button onClick={handlePrevious}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App
