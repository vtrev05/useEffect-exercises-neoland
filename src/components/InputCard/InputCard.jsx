import React, {useEffect, useState} from 'react'

const InputCard = () => {
const [input, setInput] = useState("")
const [message, setMessage] = useState([])
const [disableInput, setDisableInput] = useState(false)

const handleInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue)
}

const handleClick = () => {
    setMessage([...message, input])
  
}



useEffect(()=> {
    let characters = input.length

    if (characters <= 280) {
        document.title = `te quedan ${280 - characters} caracteres`
    } if (characters >= 280) {
        alert("No te quedan caracteres, borra parte de tu mensaje")
        setDisableInput(true)
    }

}, [input])



  return (
    <div>
        <h1>Esta es mi aplicación</h1>
        <textarea disabled={disableInput}  placeholder='escribe aquí tu tweet' onChange={handleInput}></textarea>
        {input.length > 0 && input.length < 280 && <button onClick={handleClick}>Enviar</button>}

        {message.map((mes) => (
            <div>{mes}</div>
        ))}
    </div>
  )
}

export default InputCard