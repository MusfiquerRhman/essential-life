import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './commonStyles.scss'

function SearchBox() {
  return (
    <div  className='search__box' >
        <BsSearch className='search__icon'/>
        <input type="text" className='search__input' placeholder='Search'/>
    </div>
  )
}

export default SearchBox