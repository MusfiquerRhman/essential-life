import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import QuickEditTable from '../../Components/QuickEdit/QuickEditTable';
import Table from './Components/Table';

const QucikHeadCells = [
  {
      id: 'name',
      label: 'Name',
  },
  {
      id: 'description',
      label: 'Short Description',
  },
];

function Ailments() {
  const [selected, setSelected] = useState([]);
  const [action, setAction] = React.useState('');
  const [quickEdit, setQuickEdit] = useState(false);
  const [modifiedItems, setmodifiedItems] = useState({}); // Modified in quick edit

  // useEffect(() => {
  //   console.log(selected, contentStatus, action)

  // }, [selected, contentStatus, action])

  const handleSelectDeleteAll = () => {
    // TODO: Delete all selected
  }

  const handleClickExecuteAction = () => {
    // TODO: Execute action
  }

  const onClickQuickEdit = () => {
    setQuickEdit(true);
  }

  const cancelQuickEdit = () => {
    setQuickEdit(false);
  }

  const updateQuickEdit = () => {

  }

  return (
    <section>
      <h1>Ailments</h1>
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
                <NavLink to='/ailments/new/' className='button'>Create Ailments</NavLink>
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
            action={action}
            setAction={setAction}
            handleClickExecuteAction={handleClickExecuteAction}
          />
        )}

        {quickEdit && (
          <QuickEditTable 
            headCells={QucikHeadCells}
            setmodifiedItems={setmodifiedItems}
          />
        )}

      </div>
    </section>
  )
}

export default Ailments