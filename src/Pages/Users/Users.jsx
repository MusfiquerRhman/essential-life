import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';

import Dashboard from "../Dashboard/Dashboard";

function Users() {
  const [selected, setSelected] = useState([]);
  const [contentStatus, setcontentStatus] = useState('--');
  const [action, setAction] = useState('');
  const [selectAdmin, setSelectAdmin] = useState(false);

  const onChangeAdminSelect = () => {
    setSelectAdmin(true)
  }

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
    <div>
      <Dashboard />
      <section>
        <h1>Users</h1>
        <div className='search__container'>
          <SearchBox />
          <Button startIcon={<AddIcon />} sx={{ borderRadius: '2rem' }} variant="contained">
            <NavLink to='/users/new' className='button'>Create Users</NavLink>
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
            handleClickExecuteAction={handleClickExecuteAction}
            onChangeAdminSelect={onChangeAdminSelect}
          />
        </div>
      </section>
    </div>
  )
}

export default Users