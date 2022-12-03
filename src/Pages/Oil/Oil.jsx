import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';

function Oil() {
  const [selected, setSelected] = useState([]);
  const [action, setAction] = React.useState('');

  // useEffect(() => {
  //   console.log(selected, contentStatus, action)

  // }, [selected, contentStatus, action])

  const handleSelectDeleteAll = useCallback(() => {
    // TODO: Delete all selected
  }, [])

  const handleClickExecuteAction = useCallback(() => {
    // TODO: Execute action
  }, [])
  
  return (
    <section>
    <h1>Oil</h1>
    <div className='search__container'>
      <SearchBox />
      <Button startIcon={<AddIcon />} sx={{ borderRadius: '2rem' }} variant="contained">
        <NavLink to='/oil/new' className='button'>Create Oil</NavLink>
      </Button>
    </div>

    <div className='table__card'>
      <Table
        selected={selected}
        setSelectedArray={setSelected}
        handleSelectDeleteAll={handleSelectDeleteAll}
        action={action}
        setAction={setAction}
        handleClickExecuteAction={handleClickExecuteAction}
      />
    </div>
  </section>
  )
}

export default Oil