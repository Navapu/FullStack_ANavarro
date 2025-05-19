import { useEffect, useState } from 'react'
import './App.css'
import LocalStorage from './components/LocalStorage'
import Father from './components/Father'
import UserListFetch from './components/UserListFecth'
function App() {

  useEffect(() => {
    window.addEventListener('resize',windowResize)

    return () => {
      window.removeEventListener("resize", windowResize)
    }
  }, [])

  const windowResize = () => {
    console.log(`The height is: ${window.innerHeight}, and the width: ${window.innerWidth}`)
  }

  return (
    <>
      {/* <LocalStorage />
      <Father /> */}

      <UserListFetch />
    </>
  )
}

export default App
