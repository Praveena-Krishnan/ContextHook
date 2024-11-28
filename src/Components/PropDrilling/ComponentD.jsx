import React from 'react'

const ComponentD = (props) => {
  return (
    <div className='box'>
        <h1>Component D</h1>
        <h2>{`bye ${props.user}`}</h2>
        </div>
  )
}

export default ComponentD