import { use, useState } from 'react'
import './App.css'
import { imageGallery } from './data/gallerydata'
function App() {
  const randomnumber = Math.floor(Math.random() * 100) + 1;


  return (
    <>
      <Counter />
      <Switch />
      <InputEvents />
      <TaskList />
      <Form />
      <Gallery />
      <Game randomnumber={randomnumber}/>
      <TextArea />
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
  const prevImg = (position === 0) ? imageGallery.length - 1 : position - 1
  const nextImg = (position === imageGallery.length - 1) ? 0 : position + 1
  return (
    <div className='movie-section'>
      <img src={imageGallery[position].url} className='movie-img' />
      <h2>{imageGallery[position].title}</h2>
      <div className='container-buttons'>
        <div className='img-buttons'>
          <img src={imageGallery[prevImg].url} />
          <button onClick={handlePrevious}>Prev</button>
        </div>
        <div className='img-buttons'>
          <button onClick={handleNext}>Next</button>
          <img src={imageGallery[nextImg].url} />
        </div>
      </div>
    </div>
  )
}

const Game = ({randomnumber}) => {
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
      <input type="number" value={userNumber} onChange={(e) => setUserNumber(e.target.value)}/>
      <button onClick={checkNumber}>Check</button>
      <p>{state}</p>
    </div>
  )
}

const TextArea = () => {
  const [userText, setUserText] = useState("")
  const [words, setWords] = useState(0)
  const [char, setChar] = useState(0)
  const handleChange = (e) => {
    setUserText(e.target.value)
    setChar(e.target.value.trim().length)
    const auxWords = (e.target.value.trim().split(" ") == '') ? 0 : e.target.value.trim().split(" ").length
    setWords(auxWords)
  }
  return(
    <div>
      <textarea cols="30" rows="10" value={userText} onChange={handleChange}></textarea>
      <p>Words: {words}</p>
      <p>Characters: {char}</p>
    </div>
  )
}

export default App
