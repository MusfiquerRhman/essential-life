import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';

const DeleteDropdownMenu = React.memo((props) => {
    const { handleSelectDeleteAll } = props;

    const [anchorElSelect, setAnchorElSelect] = useState(null);
    const openSelect = Boolean(anchorElSelect);

    const handleClickSelect = (event) => {
        setAnchorElSelect(event.currentTarget);
    };

    const handleCloseSelect = () => {
        setAnchorElSelect(null);
    };
    
    return (
        <React.Fragment>
            <Button
                id="action-button"
                aria-controls={openSelect ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openSelect ? 'true' : undefined}
                onClick={handleClickSelect}
                sx={{
                    margin: 0
                }}
            >
                <DeleteForeverIcon />
                <ExpandMoreIcon />
            </Button>
            <Menu
                id="action-menu"
                anchorEl={anchorElSelect}
                open={openSelect}
                onClose={handleCloseSelect}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleSelectDeleteAll}> Delete All Selected</MenuItem>
            </Menu>
        </React.Fragment>
    )
})

export default DeleteDropdownMenu;