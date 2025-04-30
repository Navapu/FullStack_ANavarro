import './App.css'
import Header from '@/components/Header'
import {Footer} from '@/components/Footer'

function App() {
  const name = "Ainhoa"

  return (
    <div className='card'>
      <Header name={name} />
      <Footer name={name} />
    </div>
  )
}


export default App
