import React, { useState } from 'react'
import ComponentB from './ComponentB'
const ComponentA = () => {
    const [user,setuser]=useState("Praveena");
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentB user={user}/>
        </div>
  )
}

export default ComponentA 