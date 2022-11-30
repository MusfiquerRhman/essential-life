import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import DeleteDropdownMenu from '../../../Components/TablesToolBars/UI Components/DeleteDropdownMenu';
import DropDownMenuWrapper from '../../../Components/TablesToolBars/UI Components/DropDownMenuWrapper';
import FilterButton from '../../../Components/TablesToolBars/UI Components/FilterButton';
import ToolBarWrapper from '../../../Components/TablesToolBars/UI Components/ToolBarWrapper';

function EnhancedTableToolbar(props) {
    const {
        numSelected,
        handleSelectDeleteAll,
        visibleInRegion,
        setVisibleInregion,
        showForIOS,
        setShowForIOS,
        isActive,
        setIsActive,
        showForAndroid,
        setShowForAndroid,
    } = props

    const [anchorElFilter, setAnchorElFilter] = React.useState(null);
    const openFilter = Boolean(anchorElFilter);

    const handleClickFilter = (event) => {
        setAnchorElFilter(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorElFilter(null);
    };

    const handleChangeVisibleInRegion = (event) => {
        setVisibleInregion(event.target.value);
    };

    const handleChangeiOS = (event) => {
        setShowForIOS(event.target.value);
    };

    const handleChangeAndroid = (event) => {
        setShowForAndroid(event.target.value);
    };

    const handleChangeIsActive = (event) => {
        setIsActive(event.target.value);
    };

    return (
        <ToolBarWrapper
            numSelected={numSelected}
            title='Cards'
        >
            <div className='action__group'>
                {numSelected > 0 && (
                    <div className='selected__actions'>
                        <DeleteDropdownMenu handleSelectDeleteAll={handleSelectDeleteAll} />
                    </div>
                )}
                <div className='table__filters'>
                    {/* filter dropdown */}
                    <FilterButton
                        openFilter={openFilter}
                        handleClickFilter={handleClickFilter}
                    />

                    <Menu
                        id="3-menu"
                        anchorEl={anchorElFilter}
                        open={openFilter}
                        onClose={handleCloseFilter}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem >
                            <DropDownMenuWrapper
                                value={visibleInRegion}
                                handleChange={handleChangeVisibleInRegion} 
                                label='Visible in Regions'
                            >
                                <MenuItem value={'--'}>--</MenuItem>
                                <MenuItem value={'US'}>US</MenuItem>
                                <MenuItem value={'Canada'}>Canada</MenuItem>
                                <MenuItem value={'Japan'}>Japan</MenuItem>
                                <MenuItem value={'Mars'}>In Mars</MenuItem>
                            </DropDownMenuWrapper>
                        </MenuItem>
                        <MenuItem >
                            <DropDownMenuWrapper
                                value={showForIOS}
                                handleChange={handleChangeiOS} 
                                label='Show on iOS'
                            >
                                <MenuItem value={'--'}>--</MenuItem>
                                <MenuItem value={1}>Yes</MenuItem>
                                <MenuItem value={0}>No</MenuItem>
                            </DropDownMenuWrapper>
                        </MenuItem>
                        <MenuItem >
                            <DropDownMenuWrapper
                                value={showForAndroid}
                                handleChange={handleChangeAndroid} 
                                label='Show on Android'
                            >
                                <MenuItem value={'--'}>--</MenuItem>
                                <MenuItem value={1}>Yes</MenuItem>
                                <MenuItem value={0}>No</MenuItem>
                            </DropDownMenuWrapper>
                        </MenuItem>
                        <MenuItem >
                            <DropDownMenuWrapper
                                value={isActive}
                                handleChange={handleChangeIsActive} 
                                label='Is Active'
                            >
                                <MenuItem value={'--'}>--</MenuItem>
                                <MenuItem value={1}>Yes</MenuItem>
                                <MenuItem value={0}>No</MenuItem>
                            </DropDownMenuWrapper>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </ToolBarWrapper>
    );
}

export default EnhancedTableToolbar