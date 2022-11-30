import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import DeleteDropdownMenu from '../../../Components/TablesToolBars/UI Components/DeleteDropdownMenu';
import DoneButton from '../../../Components/TablesToolBars/UI Components/DoneButton';
import DropDownMenuWrapper from '../../../Components/TablesToolBars/UI Components/DropDownMenuWrapper';
import FilterButton from '../../../Components/TablesToolBars/UI Components/FilterButton';
import FilterDropDownWrapper from '../../../Components/TablesToolBars/UI Components/FilterDropDownWrapper';
import ToolBarWrapper from '../../../Components/TablesToolBars/UI Components/ToolBarWrapper';

function ToolBar(props) {
    const {
        title,
        numSelected,
        handleSelectDeleteAll,
        contentStatus,
        setcontentStatus,
        action,
        setAction,
        handleClickExecuteAction,
        onChangeAdminSelect,
    } = props;

    const [anchorElFilter, setAnchorElFilter] = React.useState(null);
    const openFilter = Boolean(anchorElFilter);

    const handleClickFilter = (event) => {
        setAnchorElFilter(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorElFilter(null);
    };

    const [anchorElLens, setAnchorElLens] = React.useState(null);
    const openLens = Boolean(anchorElLens);

    const handleClickLens = (event) => {
        setAnchorElLens(event.currentTarget);
    };

    const handleCloseLens = () => {
        setAnchorElLens(null);
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
                    <div className='flex__row'>
                        <Button
                            id="4-button"
                            aria-controls={openLens ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openLens ? 'true' : undefined}
                            onClick={handleClickLens}
                        >
                            Lens
                        </Button>
                        <Menu
                            id="3-menu"
                            anchorEl={anchorElLens}
                            open={openLens}
                            onClose={handleCloseLens}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={onChangeAdminSelect} value={'admin'}>Select Admin Users</MenuItem>
                        </Menu>

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
                            title="User Subscription Type"
                        >
                            <MenuItem value={'--'}>--</MenuItem>
                            <MenuItem value={'none'}>None</MenuItem>
                            <MenuItem value={'legacy'}>Legacy</MenuItem>
                            <MenuItem value={'annual'}>Annual</MenuItem>
                            <MenuItem value={'Trail'}>Trail</MenuItem>
                        </FilterDropDownWrapper>
                    </div>
                </div>
            </div>
        </ToolBarWrapper>
    );
}

export default ToolBar