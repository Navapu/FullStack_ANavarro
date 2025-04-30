import { useState } from 'react'
export const Footer = ({ name }) => {
    const [isPressed, setIsPressed] = useState(false)
    const styleMain = isPressed ? 'pressed' : 'notpressed'

    const toggleState = () => {
        setIsPressed(!isPressed)
    }
    
    return (
        <main>
            <p>Mi nombre es {name}, actualmente estoy estudiando el master de full stack development, me considero una chica
                un poco tímida a la cual le gusta mucho el cine y el anime</p>
            <p>Soy una persona que le gusta estar en casa, no me gusta mucho salir de fiesta</p>
            <button onClick={toggleState}>Dato curioso</button>
            <div className={styleMain}>
                <img src="https://cataas.com/cat/gif" alt="cat" />
                <p>Me gustan mucho los gatos</p>
            </div>
        </main>
    )
}
