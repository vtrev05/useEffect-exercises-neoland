import React, { useEffect, useState } from 'react'

const CodeEffectUpdate = () => {

const [myName, setMyName] = useState({
  name: 'Peter',
  lastname: 'Parker'
})

useEffect(()=> {
  console.log('Llamado después de cada render')
return()=> console.log("Desmonto el componente")

})

  return (
    <div>
      <h4>{myName.name} {myName.lastname}</h4>
      <input type="text" value={myName.name} onChange={(e)=> setMyName({...myName, name: e.target.value})}/>
      <input type="text" value={myName.lastname} onChange={(e)=> setMyName({...myName, lastname: e.target.value})}/>
    </div>
  )
}

export default CodeEffectUpdate