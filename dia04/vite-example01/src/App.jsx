

const App = () => {
  const name = "Alejandro"
  const sum = (num1, num2) =>{
    return num1 + num2
  }
  return (
    <>
      <h1>Hello world {name}</h1>
      <h2>{sum(2, 8)}</h2>
      <Button text="Hello" color="red"/>
      <Button text="Hello 2" color="green"/>

    </>
  )
}

const Button = (props) => {
  const {text} = props;
  const clickButton = () =>{
    alert("HELLOOO !!")
  }
  return(
    <button onClick={clickButton}>{text}</button>
  )
}

export default App