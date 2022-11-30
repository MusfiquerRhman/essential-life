import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from "react";

const FilterDropDownWrapper = props => {
    const {
        anchorElFilter,
        openFilter, 
        handleCloseFilter,
        contentStatus,
        handleChangeContentStatus,
        title
    } = props;

    return (
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
                <FormControl fullWidth sx={{ minWidth: '10rem' }}>
                    <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={contentStatus}
                        label={title}
                        onChange={handleChangeContentStatus}
                    >
                        {props.children}
                    </Select>
                </FormControl>
            </MenuItem>
        </Menu>
    )
}

export default FilterDropDownWrapper;