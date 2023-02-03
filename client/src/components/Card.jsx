import React from 'react'
import './Card.css'

const Card = (prop) => {
  return (
      <div className='Card'>
        <div className='title'>
          {prop.name}
        </div>
        <div className='location'>{prop.location}</div>
        <div className='cntbtn'>
        <button id="button">Connect</button>
        </div>
      </div>
  )
}

export default Card