import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import React from "react";

const FilterButton = (props) => {
    const { openFilter, handleClickFilter } = props;

    return (
        <Button
            id="4-button"
            aria-controls={openFilter ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openFilter ? 'true' : undefined}
            onClick={handleClickFilter}
        >
            <FilterAltIcon />
            <ExpandMoreIcon />
        </Button>
    )
}

export default FilterButton;