import React, {useState} from 'react'
import CodeEffectUpdate from '../CodeEffectUpdate/CodeEffectUpdate'

const HideEffect = () => {
    const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
        {isVisible ? (
            <CodeEffectUpdate/>
        ): (
            <span>No está disponible</span>
        )}
        <button onClick={()=> setIsVisible(!isVisible)}>Hacer visible/invisible</button>
    </div>
  )
}

export default HideEffect