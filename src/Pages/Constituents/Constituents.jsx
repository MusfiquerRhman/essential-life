import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import QuickEditNameOnly from '../../Components/QuickEdit/QuickEditNameOnly';
import Table from './Components/Table';

const QucikHeadCells = [
  {
    id: 'name',
    label: 'Name',
  }
];

function Constituents() {
  const [selected, setSelected] = useState([]);

  const [quickEdit, setQuickEdit] = useState(false);
  const [modifiedItems, setmodifiedItems] = useState({}); // Modified in quick edit



  // useEffect(() => {
  //   console.log(selected, contentStatus, action)

  // }, [selected, contentStatus, action])

  const handleSelectDeleteAll = () => {
    // TODO: Delete all selected
  }

  const onClickQuickEdit = () => {
    setQuickEdit(true);
  }

  const cancelQuickEdit = () => {
    setQuickEdit(false);
  }

  const updateQuickEdit = () => {
    console.log(modifiedItems)
  }


  return (
    <section>
      <h1>Constituents</h1>
      <div className='search__container'>
        <SearchBox />

        <div>
          {!quickEdit && (
            <div>
              <Button sx={{ borderRadius: '2rem', marginRight: '1rem' }}
                variant='outlined'
                onClick={onClickQuickEdit}
              >
                Quick Edit
              </Button>

              <Button startIcon={<AddIcon />} sx={{ borderRadius: '2rem' }} variant="contained">
                <NavLink to='/constituents/new' className='button'>Create Constituents</NavLink>
              </Button>
            </div>
          )}

          {quickEdit && (
            <div>
              <Button sx={{ borderRadius: '2rem', marginRight: '1rem' }}
                variant='outlined'
                onClick={cancelQuickEdit}
              >
                Cancel
              </Button>

              <Button sx={{ borderRadius: '2rem' }}
                variant="contained"
                onClick={updateQuickEdit}
              >
                Save Changes
              </Button>
            </div>
          )}
        </div>

      </div>

      <div className='table__card'>
      {!quickEdit && (
        <Table
          selected={selected}
          setSelectedArray={setSelected}
          handleSelectDeleteAll={handleSelectDeleteAll}
        />
        )}
        {quickEdit && (
          <QuickEditNameOnly
            headCells={QucikHeadCells}
            setmodifiedItems={setmodifiedItems}
          />
        )}
      </div>
    </section>
  )
}

export default Constituents