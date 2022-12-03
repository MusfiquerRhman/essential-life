import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';


function ContentSuggestion() {
  const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   console.log(selected, contentStatus, action)
  
  // }, [selected, contentStatus, action])
  
  const handleSelectDeleteAll = useCallback(() => {
    // TODO: Delete all selected
  }, [])


  return (
    <section>
      <h1>Content Suggestions</h1>
      <div className='search__container'>
        <SearchBox />
        {/* <Button startIcon={<AddIcon />} sx={{borderRadius: '2rem'}} variant="contained">
          <NavLink to='/content-suggestion/new/' className='button'>Create Content Suggestions</NavLink>
        </Button> */}
      </div>
      
      <div className='table__card'>
        <Table
          setSelectedArray={setSelected}
          handleSelectDeleteAll={handleSelectDeleteAll}
        />
      </div>
    </section>
  )
}


export default ContentSuggestion