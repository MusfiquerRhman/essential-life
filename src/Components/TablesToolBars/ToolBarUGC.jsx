import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import DeleteDropdownMenu from './UI Components/DeleteDropdownMenu';
import DoneButton from './UI Components/DoneButton';
import DropDownMenuWrapper from './UI Components/DropDownMenuWrapper';
import FilterButton from './UI Components/FilterButton';
import FilterDropDownWrapper from './UI Components/FilterDropDownWrapper';
import ToolBarWrapper from './UI Components/ToolBarWrapper';

function ToolBarUGC(props) {
    const {
        title,
        numSelected,
        handleSelectDeleteAll,
        contentStatus,
        setcontentStatus,
        action,
        setAction,
        handleClickExecuteAction,
    } = props

    const [anchorElFilter, setAnchorElFilter] = React.useState(null);
    const openFilter = Boolean(anchorElFilter);

    const handleClickFilter = (event) => {
        setAnchorElFilter(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorElFilter(null);
    };

    const handleChangeContentStatus = (event) => {
        setcontentStatus(event.target.value);
    };

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    return (
        <ToolBarWrapper
            numSelected={numSelected}
            title={title}
        >
            <div className='action__group'>
                {numSelected > 0 && (
                    <div className='selected__actions'>
                        <DropDownMenuWrapper 
                            value={action}
                            handleChange={handleChangeAction} 
                            label='Select An Action'
                        >
                            <MenuItem value={'approve'}>Approve</MenuItem>
                            <MenuItem value={'rejected'}>Rejected</MenuItem>
                        </DropDownMenuWrapper>
                        
                        <DoneButton
                            action={action}
                            handleClickExecuteAction={handleClickExecuteAction}
                        />

                        <DeleteDropdownMenu handleSelectDeleteAll={handleSelectDeleteAll} />
                    </div>
                )}
                <div className='table__filters'>
                    <FilterButton
                        openFilter={openFilter}
                        handleClickFilter={handleClickFilter}
                    />

                    <FilterDropDownWrapper
                        anchorElFilter={anchorElFilter}
                        openFilter={openFilter}
                        handleCloseFilter={handleCloseFilter}
                        contentStatus={contentStatus}
                        handleChangeContentStatus={handleChangeContentStatus}
                        title="Content Status"
                    >
                        <MenuItem value={'--'}>--</MenuItem>
                        <MenuItem value={'private'}>Private</MenuItem>
                        <MenuItem value={'accepted'}>Accepted</MenuItem>
                        <MenuItem value={'rejected'}>Rejected</MenuItem>
                        <MenuItem value={'In Review'}>In Review</MenuItem>
                    </FilterDropDownWrapper>
                </div>
            </div>
        </ToolBarWrapper>
    );
}

export default ToolBarUGC