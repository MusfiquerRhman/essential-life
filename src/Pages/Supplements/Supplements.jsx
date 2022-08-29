import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';

function Supplements() {
  const [selected, setSelected] = useState([]);
  const [action, setAction] = React.useState('');

  // useEffect(() => {
  //   console.log(selected, contentStatus, action)

  // }, [selected, contentStatus, action])

  const handleSelectDeleteAll = () => {
    // TODO: Delete all selected
  }

  const handleClickExecuteAction = () => {
    // TODO: Execute action
  }

  return (
    <section>
      <h1>Supplements</h1>
      <div className='search__container'>
        <SearchBox />
        <Button startIcon={<AddIcon />} sx={{ borderRadius: '2rem' }} variant="contained">
          <NavLink to='/supplements/new' className='button'>Create Supplements</NavLink>
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


export default Supplements;