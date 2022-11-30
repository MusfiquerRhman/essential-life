import * as React from 'react';
import DeleteDropdownMenu from './UI Components/DeleteDropdownMenu';
import ToolBarWrapper from './UI Components/ToolBarWrapper';

function ToolBarJustDelete(props) {
    const {
        title,
        numSelected,
        handleSelectDeleteAll,
    } = props

    return (
        <ToolBarWrapper
            numSelected={numSelected}
            title={title}
        >
            <div className='action__group'>
                {numSelected > 0 && (
                    <div className='selected__actions'>
                        <DeleteDropdownMenu  handleSelectDeleteAll={handleSelectDeleteAll}/>
                    </div>
                )}
                <div className='table__filters'>
                </div>
            </div>
        </ToolBarWrapper>
    );
}

export default ToolBarJustDelete