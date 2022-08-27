import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function EnhancedTableToolbar(props) {
    const {
        numSelected,
        handleSelectDeleteAll,
    } = props

    const [anchorElSelect, setAnchorElSelect] = React.useState(null);
    const openSelect = Boolean(anchorElSelect);

    const handleClickSelect = (event) => {
        setAnchorElSelect(event.currentTarget);
    };

    const handleCloseSelect = () => {
        setAnchorElSelect(null);
    };

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Effective Solutions
                </Typography>
            )}

            <div className='action__group'>
                {numSelected > 0 && (
                    <div className='selected__actions'>
                        {/* Delete DropDown */}

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
                    </div>
                )}
                <div className='table__filters'>

                </div>
            </div>
        </Toolbar>
    );
}

export default EnhancedTableToolbar