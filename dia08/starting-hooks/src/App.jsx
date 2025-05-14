import { use, useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Switch from './components/Switch';
import InputEvents from'./components/InputEvents';
import TaskList from'./components/TaskList';
import Form from './components/Form';
import Gallery from './components/Gallery';
import Game from './components/Game';
import TextArea from './components/TextArea';
import Timer from './components/Timer';
import Calculator from './components/Calculator';
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
      <Game randomnumber={randomnumber} />
      <TextArea />
      <Timer />
      <Calculator />
    </>
  )
}


export default App
