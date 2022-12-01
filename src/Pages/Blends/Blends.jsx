import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import QuickEditTableWithSwitch from '../../Components/QuickEdit/QuickEditTableWithSwitch';
import Table from './Components/Table';

const QucikHeadCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'description',
    label: 'Fact',
  },
  {
    id: 'featured',
    label: 'Featured'
  }
];

function Blends() {
  const [selected, setSelected] = useState([]);
  const [action, setAction] = React.useState('');

  const [quickEdit, setQuickEdit] = useState(false);
  const [modifiedItems, setModifiedItems] = useState({}); // Modified in quick edit

  // useEffect(() => {
  //   console.log(selected, contentStatus, action)

  // }, [selected, contentStatus, action])

  const handleSelectDeleteAll = useCallback(() => {
    // TODO: Delete all selected
  }, [])

  const handleClickExecuteAction = useCallback(() => {
    // TODO: Execute action
  }, [])

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
      <h1>Blends</h1>
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
                <NavLink to='/blends/new' className='button'>Create Blends</NavLink>
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
          <QuickEditTableWithSwitch
            headCells={QucikHeadCells}
            setmodifiedItems={setModifiedItems}
          />
        )}
      </div>
    </section>
  )
}

export default Blends