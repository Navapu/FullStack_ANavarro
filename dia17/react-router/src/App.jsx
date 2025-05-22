import './App.css'
import {Link, Routes, Route} from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>

      </Routes>
    </>
  )
}

export default App
