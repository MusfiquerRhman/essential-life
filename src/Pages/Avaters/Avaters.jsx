import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';


function Avaters() {
  const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   console.log(selected, contentStatus, action)

  // }, [selected, contentStatus, action])

  const handleSelectDeleteAll = () => {
    // TODO: Delete all selected
  }
  
  return (
    <section>
    <h1>Avaters</h1>
    <div className='search__container'>
      <SearchBox />
      <Button startIcon={<AddIcon />} sx={{ borderRadius: '2rem' }} variant="contained">
        <NavLink to='/avaters/new' className='button'>Create Avaters</NavLink>
      </Button>
    </div>

    <div className='table__card'>
      <Table
        selected={selected}
        setSelectedArray={setSelected}
        handleSelectDeleteAll={handleSelectDeleteAll}
      />
    </div>
  </section>
  )
}

export default Avaters