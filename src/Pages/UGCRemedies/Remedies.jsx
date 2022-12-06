import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';


function Remedies() {
  const [selected, setSelected] = useState([]);
  const [contentStatus, setcontentStatus] = useState('--');
  const [action, setAction] = useState('');

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
      <h1>UGC Remedies</h1>
      <div className='search__container'>
        <SearchBox />
        <Button startIcon={<AddIcon />} sx={{borderRadius: '2rem'}} variant="contained">
          <NavLink to='/ugcremedies/public/new' className='button'>Create Remedy</NavLink>
        </Button>
      </div>
      
      <div className='table__card'>
        <Table
          selected={selected}
          setSelectedArray={setSelected}
          handleSelectDeleteAll={handleSelectDeleteAll}
          contentStatus={contentStatus}
          setcontentStatus={setcontentStatus}
          action={action}
          setAction={setAction}
          handleClickExecuteAction={handleClickExecuteAction} />
      </div>
    </section>
  )
}

export default Remedies