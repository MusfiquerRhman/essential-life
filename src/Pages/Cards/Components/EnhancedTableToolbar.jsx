import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
        visibleInRegion,
        setVisibleInregion,
        showForIOS,
        setShowForIOS,
        isActive,
        setIsActive,
        showForAndroid,
        setShowForAndroid,
    } = props

    const [anchorElFilter, setAnchorElFilter] = React.useState(null);
    const openFilter = Boolean(anchorElFilter);

    const handleClickFilter = (event) => {
        setAnchorElFilter(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorElFilter(null);
    };

    const handleChangeVisibleInRegion = (event) => {
        setVisibleInregion(event.target.value);
    };

    const handleChangeiOS = (event) => {
        setShowForIOS(event.target.value);
    };

    const handleChangeAndroid = (event) => {
        setShowForAndroid(event.target.value);
    };

    const handleChangeIsActive = (event) => {
        setIsActive(event.target.value);
    };

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
                    Cards
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
                    {/* filter dropdown */}
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
                                <InputLabel id="demo-simple-select-label">Visible in Regions</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={visibleInRegion}
                                    label="Visible in Regions"
                                    onChange={handleChangeVisibleInRegion}
                                >
                                    <MenuItem value={'--'}>--</MenuItem>
                                    <MenuItem value={'US'}>US</MenuItem>
                                    <MenuItem value={'Canada'}>Canada</MenuItem>
                                    <MenuItem value={'Japan'}>Japan</MenuItem>
                                    <MenuItem value={'Mars'}>In Mars</MenuItem>
                                </Select>
                            </FormControl>
                        </MenuItem>
                        <MenuItem >
                            <FormControl fullWidth sx={{ minWidth: '10rem' }}>
                                <InputLabel id="demo-simple-select-label">Show on iOS</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={showForIOS}
                                    label="Show on iOS"
                                    onChange={handleChangeiOS}
                                >
                                    <MenuItem value={'--'}>--</MenuItem>
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={0}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </MenuItem>
                        <MenuItem >
                            <FormControl fullWidth sx={{ minWidth: '10rem' }}>
                                <InputLabel id="demo-simple-select-label">Show on Android</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={showForAndroid}
                                    label="Show on Android"
                                    onChange={handleChangeAndroid}
                                >
                                    <MenuItem value={'--'}>--</MenuItem>
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={0}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </MenuItem>
                        <MenuItem >
                            <FormControl fullWidth sx={{ minWidth: '10rem' }}>
                                <InputLabel id="demo-simple-select-label">Is Active</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={isActive}
                                    label="Is Active"
                                    onChange={handleChangeIsActive}
                                >
                                    <MenuItem value={'--'}>--</MenuItem>
                                    <MenuItem value={1}>Yes</MenuItem>
                                    <MenuItem value={0}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </Toolbar>
    );
}

export default EnhancedTableToolbar