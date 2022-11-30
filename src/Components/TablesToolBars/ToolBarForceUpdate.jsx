import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import DeleteDropdownMenu from './UI Components/DeleteDropdownMenu';
import DoneButton from './UI Components/DoneButton';
import DropDownMenuWrapper from './UI Components/DropDownMenuWrapper';
import ToolBarWrapper from './UI Components/ToolBarWrapper';

function ToolBarForceUpdate(props) {
    const {
        title,
        numSelected,
        handleSelectDeleteAll,
        action,
        setAction,
        handleClickExecuteAction,
    } = props

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
                            <MenuItem value={'force-update'}>Force Update</MenuItem>
                        </DropDownMenuWrapper>

                        <DoneButton
                            action={action}
                            handleClickExecuteAction={handleClickExecuteAction}
                        />

                        <DeleteDropdownMenu handleSelectDeleteAll={handleSelectDeleteAll} />
                    </div>
                )}
                <div className='table__filters'>
                </div>
            </div>
        </ToolBarWrapper>
    );
}

export default ToolBarForceUpdate