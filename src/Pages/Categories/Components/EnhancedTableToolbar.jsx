import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function EnhancedTableToolbar(props) {
    const {
        numSelected,
        handleSelectDeleteAll,
        action,
        setAction,
        handleClickExecuteAction,
    } = props

    const [anchorElSelect, setAnchorElSelect] = React.useState(null);
    const openSelect = Boolean(anchorElSelect);

    const handleClickSelect = (event) => {
        setAnchorElSelect(event.currentTarget);
    };

    const handleCloseSelect = () => {
        setAnchorElSelect(null);
    };

    const handleChangeAction = (event) => {
        setAction(event.target.value);
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
                    Categories
                </Typography>
            )}

            <div className='action__group'>
                {numSelected > 0 && (
                    <div className='selected__actions'>

                        {/* Action functions */}
                        <FormControl variant="standard" fullWidth sx={{ minWidth: '10rem' }}>
                            <InputLabel id="demo-simple-select-label" sx={{ border: 'none' }}>Select An Action</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={action}
                                label="Select An Action"
                                onChange={handleChangeAction}
                                sx={{ margin: '0' }}
                            >
                                <MenuItem value={'force Update'}>Force Update</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            id="action-button"
                            aria-haspopup="true"
                            onClick={handleClickExecuteAction}
                            variant='contained'
                            sx={{
                                marginLeft: '1rem',
                                marginRight: '1rem',
                                padding: '0.5rem',
                                borderRadius: '2rem'

                            }}
                            disabled={action === '' ? true : false}
                        >
                            <DoneIcon />
                        </Button>


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