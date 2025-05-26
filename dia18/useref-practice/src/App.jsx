import { useState } from 'react'
import './App.css'
import Example0 from './components/Example0'
import Previous from './components/Previous'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example0 />
      <Previous />
    </>
  )
}

export default App
