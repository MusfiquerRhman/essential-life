import React from 'react'
import "../dashboard.scss"

function Cards({text, value}) {
  return (
    <div className='cards'>
        <p className='cards__text'>{text}</p>
        <span className='cards__value'>{value}</span>
    </div>
  )
}

export default Cards