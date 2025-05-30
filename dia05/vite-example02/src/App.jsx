const App = () => {
  const sum = (num1, num2) => {
    return num1 + num2
  }
  var name = "Alejandro"
  const people = [{
    name: 'Juan', age: 35
  }, {
    name: 'Maria', age: 20
  },
  {
    name: 'Marcos', age: 27
  }
  ]
  return (
    <>
      <Hello name={name} />
      <Hello2 />
      <Hello3 name="Antonio" />
      <h2>{sum(2, 8)}</h2>
      <Button text="Hello" color="red" />
      <Button text="Hello 2" color="green" />


      {
        people.map(({ name, age }) => {
          return (
              <CardPeople name={name} age={age}/>
          )
        }
        )}
    </>
  )
}

const Button = (props) => {
  const { text } = props;
  const clickButton = () => {
    alert("HELLOOO !!")
  }
  return (
    <button onClick={clickButton}>{text}</button>
  )
}
const Hello = ({ name }) => {
  if (!name) {
    return (<h1 className="red">Hello world!</h1>)
  } else {
    return (<h1 className="red">Hello {name}</h1>)
  }
}

const Hello2 = ({ name }) => {
  return (
    <>
      {name ? <h1>Hello {name}</h1> : <h1>Hello world!</h1>}
    </>
  )
}

const Hello3 = ({ name }) => {
  return (
    <>
      {name && <h1>Hello {name}</h1>}
    </>
  )
}

const CardPeople = ({ name, age }) => {
  return (
    <>
      <div>{name}</div>
      <span>{age}</span>
    </>
  )

}

export default App