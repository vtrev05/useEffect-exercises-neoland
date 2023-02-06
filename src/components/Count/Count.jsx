import React, {useEffect, useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        console.log("el contador está en:", count)
    }, [count])

  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=> setCount(count + 1)}>Incremento</button>
        <button onClick={()=> setCount(count + 1)}>Incremento</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Count