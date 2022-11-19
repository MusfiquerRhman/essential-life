import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import QuickEditCards from '../../Components/QuickEdit/QuickEditCards';
import Table from './Components/Table';

const QucikHeadCells = [
  {
    id: 'title',
    label: 'Title',
  },
  {
    id: 'ios',
    label: 'Show For iOS',
  },
  {
    id: 'android',
    label: 'Show for Android'
  },
  {
    id: 'active',
    label: 'Active'
  },
  {
    id: 'region',
    label: 'Region Visible'
  }
];


function Cards() {
  const [selected, setSelected] = useState([]);
  const [visibleInRegion, setVisibleInregion] = React.useState('--');
  const [isActive, setIsActive] = React.useState('--');
  const [showForIOS, setShowForIOS] = useState('--');
  const [showForAndroid, setShowForAndroid] = useState('--')

  const [quickEdit, setQuickEdit] = useState(false);
  const [modifiedItems, setmodifiedItems] = useState({}); // Modified in quick edit

  useEffect(() => {
    console.log(modifiedItems)
  }, [modifiedItems])

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
    console.log(modifiedItems)
  }


  return (
    <section>
      <h1>Cards</h1>
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
                <NavLink to='/cards/new' className='button'>Create Card</NavLink>
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
          visibleInRegion={visibleInRegion}
          setVisibleInregion={setVisibleInregion}
          showForIOS={showForIOS}
          setShowForIOS={setShowForIOS}
          isActive={isActive}
          setIsActive={setIsActive}
          showForAndroid={showForAndroid}
          setShowForAndroid={setShowForAndroid}
          handleClickExecuteAction={handleClickExecuteAction}
        />
        )}

        {quickEdit && (
          <QuickEditCards
            headCells={QucikHeadCells}
            setmodifiedItems={setmodifiedItems}
          />
        )}
      </div>
    </section>
  )
}

export default Cards