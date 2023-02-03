import React from 'react'
import "./CardMed.css";

const CardMed = (prop) => {
    return (
        <div className='Card'>
          <div className='name'>{prop.name}</div>
          <div className='Mfgdate'>{prop.mf_date}</div>
          <div className='Expirydate'>{prop.exp_date}</div>
          <div className='price'>{prop.price}</div>
          <div className='illness'>{prop.illness}</div>
          <div className='cntbtn'>
          <button id='button'>Buy</button>
          </div>
        </div>
    )
  }
  
  export default CardMed;