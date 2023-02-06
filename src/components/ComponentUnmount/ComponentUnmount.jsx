import React, {useState} from 'react'
import Message from '../Message/Message'

const ComponentUnmount = () => {
const [visible, setIsVisible] = useState(true)
console.log(visible)

  return (
    <div>
       {/*  {visible && (
            <div>Es visible</div>
        )} */}
        {visible ? (
            <Message/>
        ): (
            <div>no es visible</div>
        )}
        <button onClick={()=> setIsVisible(!visible)}>Cambiar visibilidad</button>
    </div>
  )
}

export default ComponentUnmount