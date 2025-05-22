import './App.css'
import {Link, Routes, Route, NavLink} from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './private/Dashboard'
import PrivateLayout from './private/PrivateLayout'
import Config from './private/Config'
import Logout from './private/Logout'
import Error from './pages/Error'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>


          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </nav>


      <Routes>
        <Route index element={<Home/>}/>

        {/* <Route path='/contact' element={<Contact />}></Route> */}
        
        <Route path='/contact'>
          <Route index element={<Contact />}></Route>
          <Route path=':contactId' element={<Contact />}></Route>
        </Route>
        {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
        {/* Layout of private area */}
        <Route path='/dashboard' element={<PrivateLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='config' element={<Config />}></Route>
          <Route path='logout' element={<Logout />}></Route>

        </Route>

        <Route element={<Error /> } path="*"/>


      </Routes>
    </>
  )
}

export default App
