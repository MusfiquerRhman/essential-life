// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import DoneIcon from '@mui/icons-material/Done';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { default as React, useEffect, useState } from 'react';

// const TableCommonFunctions = (props) => {

//     const {
//         selected,
//         setSelected,
//         handleSelectDeleteAll,
//         contentStatus,
//         setcontentStatus,
//         perPage,
//         setPerPage,
//         action,
//         setAction,
//         handleClickExecuteAction,
//     } = props

    
//     // These states and functions control select menu on the left
//     // const [anchorEl, setAnchorEl] = React.useState(null);
//     // const open = Boolean(anchorEl);

//     // const handleClick = (event) => {
//     //     setAnchorEl(event.currentTarget);
//     // };

//     // const handleClose = () => {
//     //     setAnchorEl(null);
//     // };

//     // const [selectAllIcon, setSelectAllIcon] = useState(<CheckBoxOutlineBlankIcon />)
//     // const [selectMatchingIcon, setselectMatchingIcon] = useState(<CheckBoxOutlineBlankIcon />)

//     // const handleSelectAll = () => {
//     //     setSelected(previousState => previousState === 'all' ? '' : 'all')
//     // }

//     // const handleClickMatching = () => {
//     //     setSelected(previousState => previousState === 'matching' ? '' : 'matching')
//     // }

//     // useEffect(() => {
//     //     setSelectAllIcon(selected === 'all' ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />)
//     //     setselectMatchingIcon(selected === '' ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />)
//     // }, [selected])
//     //--------------------------------------------------------


//     // These states and functions control action select menu oon the right, when something is selected
//     const [anchorElSelect, setAnchorElSelect] = React.useState(null);
//     const openSelect = Boolean(anchorElSelect);

//     const handleClickSelect = (event) => {
//         setAnchorElSelect(event.currentTarget);
//     };

//     const handleCloseSelect = () => {
//         setAnchorElSelect(null);
//     };
//     //--------------------------------------------------------


//     // These states and functions control filter select menu on the right
//     const [anchorElFilter, setAnchorElFilter] = React.useState(null);
//     const openFilter = Boolean(anchorElFilter);

//     const handleClickFilter = (event) => {
//         setAnchorElFilter(event.currentTarget);
//     };

//     const handleCloseFilter = () => {
//         setAnchorElFilter(null);
//     };

//     const handleChangeContentStatus = (event) => {
//         setcontentStatus(event.target.value);
//     };

//     // const handleChangePerPage = (event) => {
//     //     setPerPage(event.target.value);
//     // };
//     //--------------------------------------------------------



//     // Action functions

//     const handleChangeAction = (event) => {
//         setAction(event.target.value);
//     };

//     return (
//         <>
//             <div className='table__options'>
//                 {/* <div className='table__select'>
//                     <Button
//                         id="1-button"
//                         aria-controls={open ? 'basic-menu' : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? 'true' : undefined}
//                         onClick={handleClick}
//                         sx={{
//                             margin: 0
//                         }}
//                     >
//                         {selectMatchingIcon}
//                         <ExpandMoreIcon />
//                     </Button>
//                     <Menu
//                         id="2-menu"
//                         anchorEl={anchorEl}
//                         open={open}
//                         onClose={handleClose}
//                         MenuListProps={{
//                             'aria-labelledby': 'basic-button',
//                         }}
//                     >
//                         <MenuItem onClick={handleSelectAll}> {selectAllIcon} Select All</MenuItem>
//                         <MenuItem onClick={handleClickMatching}> {selectMatchingIcon} Select All Matching</MenuItem>
//                     </Menu>
//                 </div> */}

//                 {/* ----------------------------------------------------- */}

//                 <div className='action__group'>

//                     {selected !== '' &&
//                         <div className='selected__actions'>

//                             {/* Action functions */}
//                             <FormControl variant="standard" fullWidth sx={{ minWidth: '10rem' }}>
//                                 <InputLabel id="demo-simple-select-label" sx={{ border: 'none' }}>Select An Action</InputLabel>
//                                 <Select
//                                     labelId="demo-simple-select-label"
//                                     id="demo-simple-select"
//                                     value={action}
//                                     label="Select An Action"
//                                     onChange={handleChangeAction}
//                                     sx={{margin: '0'}}
//                                 >
//                                     <MenuItem value={'approve'}>Approve</MenuItem>
//                                     <MenuItem value={'rejected'}>Rejected</MenuItem>
//                                 </Select>
//                             </FormControl>

//                             <Button
//                                 id="action-button"
//                                 aria-haspopup="true"
//                                 onClick={handleClickExecuteAction}
//                                 variant='contained'
//                                 sx={{
//                                     marginLeft: '1rem',
//                                     marginRight: '1rem',
//                                     padding: '0.5rem',
//                                     borderRadius: '2rem'

//                                 }}
//                                 disabled={action === '' ? true : false}
//                             >
//                                 <DoneIcon />
//                             </Button>


//                             {/* Delete DropDown */}

//                             <Button
//                                 id="action-button"
//                                 aria-controls={openSelect ? 'basic-menu' : undefined}
//                                 aria-haspopup="true"
//                                 aria-expanded={openSelect ? 'true' : undefined}
//                                 onClick={handleClickSelect}
//                                 sx={{
//                                     margin: 0
//                                 }}
//                             >
//                                 <DeleteForeverIcon />
//                                 <ExpandMoreIcon />
//                             </Button>
//                             <Menu
//                                 id="action-menu"
//                                 anchorEl={anchorElSelect}
//                                 open={openSelect}
//                                 onClose={handleCloseSelect}
//                                 MenuListProps={{
//                                     'aria-labelledby': 'basic-button',
//                                 }}
//                             >
//                                 <MenuItem onClick={handleSelectDeleteAll}> Delete All Selected</MenuItem>
//                             </Menu>
//                         </div>
//                     }


//                     <div className='table__filters'>
//                         {/* filter dropdown */}
//                         <Button
//                             id="4-button"
//                             aria-controls={openFilter ? 'basic-menu' : undefined}
//                             aria-haspopup="true"
//                             aria-expanded={openFilter ? 'true' : undefined}
//                             onClick={handleClickFilter}
//                         >
//                             <FilterAltIcon />
//                             <ExpandMoreIcon />
//                         </Button>
//                         <Menu
//                             id="3-menu"
//                             anchorEl={anchorElFilter}
//                             open={openFilter}
//                             onClose={handleCloseFilter}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                             }}
//                         >
//                             <MenuItem >
//                                 <FormControl fullWidth sx={{ minWidth: '10rem' }}>
//                                     <InputLabel id="demo-simple-select-label">Content Status</InputLabel>
//                                     <Select
//                                         labelId="demo-simple-select-label"
//                                         id="demo-simple-select"
//                                         value={contentStatus}
//                                         label="Content Status"
//                                         onChange={handleChangeContentStatus}
//                                     >
//                                         <MenuItem value={'--'}>--</MenuItem>
//                                         <MenuItem value={'private'}>Private</MenuItem>
//                                         <MenuItem value={'accepted'}>Accepted</MenuItem>
//                                         <MenuItem value={'rejected'}>Rejected</MenuItem>
//                                         <MenuItem value={'In Rivew'}>In Review</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </MenuItem>
// {/* 
//                             <MenuItem >
//                                 <FormControl fullWidth sx={{ minWidth: '10rem' }}>
//                                     <InputLabel id="demo-simple-select-label">Content Status</InputLabel>
//                                     <Select
//                                         labelId="demo-simple-select-label"
//                                         id="demo-simple-select"
//                                         value={perPage}
//                                         label="Content Status"
//                                         onChange={handleChangePerPage}
//                                     >
//                                         <MenuItem value={25}>25</MenuItem>
//                                         <MenuItem value={50}>50</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </MenuItem> */}
//                         </Menu>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default TableCommonFunctions;