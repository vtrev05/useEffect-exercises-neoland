import React, { useEffect, useState } from 'react'

const UseFetch = () => {
    const [id, setId] = useState(null);
    const [userInfo, setUserInfo] = useState([])


useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((user) => setUserInfo([...userInfo, user]))
}, [id])

console.log(userInfo)

  return (
    <div>
        <h1>Teclea un número del 1 al 10 y te mostraremos información de un usuario</h1>
        <input type="number" placeholder='Mete un número' onChange={(e)=> setId(e.target.value)}/>
        
            { userInfo.map((info) => {
                return(
                <div key={info.id}>    
                    {info.username}
                 </div>)
            })}
       
    </div>
  )
}

export default UseFetch