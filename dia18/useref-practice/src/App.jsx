import { useState } from 'react'
import './App.css'
import Example0 from './components/Example0'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example0 />
    </>
  )
}

export default App
