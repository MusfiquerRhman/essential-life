import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../Components/Common/SearchBox';
import Table from './Components/Table';


function Cards() {
  const [selected, setSelected] = useState([]);
  const [visibleInRegion, setVisibleInregion] = React.useState('--');
  const [isActive, setIsActive] = React.useState('--');
  const [showForIOS, setShowForIOS] = useState('--');
  const [showForAndroid, setShowForAndroid] = useState('--')
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
    <h1>Cards</h1>
    <div className='search__container'>
      <SearchBox />
      <Button startIcon={<AddIcon />} sx={{borderRadius: '2rem'}} variant="contained">
        <NavLink to='/card/new' className='button'>Create Card</NavLink>
      </Button>
    </div>
    
    <div className='table__card'>
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
    </div>
  </section>
  )
}

export default Cards