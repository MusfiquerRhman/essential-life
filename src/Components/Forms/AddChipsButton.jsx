import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";

const AddChipsButton = props => {
    const { open, onClickAddButton, anchorEl, handleClose, handleChange, names } = props;
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={onClickAddButton}
                startIcon={<AddIcon />}
                sx={{ borderRadius: '2rem' }}
            >
                Add
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {names.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleChange(item)}>{item}</MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default AddChipsButton;