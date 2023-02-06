import React, {useEffect} from 'react'

const Message = () => {

useEffect(()=> {
    console.log('Me monto en el dom')
    return()=> {
        console.log('Me desmonto')
    }
}, [])

  return (
    <div><textarea placeholder='soy un textAarea'></textarea></div>
  )
}

export default Message