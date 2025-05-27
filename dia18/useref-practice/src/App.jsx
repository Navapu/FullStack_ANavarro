import { useState } from 'react'
import './App.css'
import Example0 from './components/Example0'
import Previous from './components/Previous'
import AntiSpam from './components/AntiSpam'
import DetectClick from './components/DetectClick'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example0 />
      <Previous />
      <AntiSpam />
      <DetectClick />
    </>
  )
}

export default App
