import './App.css'
import { Navigation } from './components/Navigation'
import { Routes, Route } from "react-router";
import Login from './pages/Login';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Register from './pages/Register';
function App() {

  return (
    <>
      <Navigation />
      <main>
        <Routes>
            <Route index element={<Landing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
