import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import './commonStyles.scss';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
]

function SearchBox() {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const onChangeSearch = (e) => {
    setSearchedTerm(e.target.value)
  }

  useEffect(() => {
    setSearchResult(top100Films.filter(item => item.title.toLowerCase().includes(searchedTerm.toLowerCase())));
  }, [searchedTerm])


  const clearInput = () => {
    setSearchedTerm('')
  }

  const setSelectedItem = (value) => {
    setSearchedTerm(value)
  }

  return (
    <div className='search'>
      <div className='search__box' >
        <BsSearch className='search__icon' />
        <input type="text" className='search__input' placeholder='Search' onChange={onChangeSearch} value={searchedTerm} />
        {searchedTerm !== '' && (
          <MdClear className='search__icon' onClick={clearInput} />
        )}
      </div>
      {
        (searchedTerm !== '' && (
          <div className='search__results'>
            {
              searchResult.length > 0 && (
                searchResult.map((value, index) => {
                  return (
                    <a key={index} hfer='#'>
                      <p className='search_item' onClick={() => setSelectedItem(value.title)}>{value.title} ({value.year})</p>
                    </a>
                  )
                })
              )
            }
            {
              searchResult.length === 0 && (
                <p className='search_item'>Nothing Found</p>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default SearchBox