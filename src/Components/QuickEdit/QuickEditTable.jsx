import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';
import TableHeadNoPhoto from '../TableHeads/TableHeadNoPhoto';
import ToolBarUGC from '../TablesToolBars/ToolBarUGC';

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'description',
        label: 'Description',
    },
];


function createData(id, name, description) {
    return {
        id,
        name,
        description,
    };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function QuickEditTable(props) {
    const [rows, setrows] = useState([
        createData( 1, 'wow1', 'Detailed Description for quick edit'),
        createData( 2, 'wow2', 'Detailed Description for quick edit'),
        createData( 3, 'wow3', 'Detailed Description for quick edit'),
        createData( 4, 'wow4', 'Detailed Description for quick edit'),
        createData( 5, 'wow5', 'Detailed Description for quick edit'),
        createData( 6, 'wow6', 'Detailed Description for quick edit'),
        createData( 7, 'wow7', 'Detailed Description for quick edit'),
        createData( 8, 'wow8', 'Detailed Description for quick edit'),
        createData( 9, 'wow9', 'Detailed Description for quick edit'),
        createData(10, 'wow10','Detailed Description for quick edit'),
        createData(11, 'wow11','Detailed Description for quick edit'),
        createData(12, 'wow12','Detailed Description for quick edit'),
        createData(13, 'wow13','Detailed Description for quick edit'),
    ])

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const {
        setSelectedArray,
        handleSelectDeleteAll,
        contentStatus,
        setcontentStatus,
        action,
        setAction,
        handleClickExecuteAction,
    } = props

    console.log(rows)

    const handleChangeName = (e, id) => {
        const newArr = rows.map(obj => {
            if(obj.id === id){
                return { ...obj, name: e.target.value}
            }
            return obj;
        })
        setrows(newArr)
    }

    const handleChangeDescription = (e, id) => {
        const newArr = rows.map(obj => {
            if(obj.id === id){
                return { ...obj, description: e.target.value}
            }
            return obj;
        })
        setrows(newArr)
    }



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <ToolBarUGC
                    title={'Quick Edit'}
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
                    contentStatus={contentStatus}
                    setcontentStatus={setcontentStatus}
                    action={action}
                    setAction={setAction}
                    handleClickExecuteAction={handleClickExecuteAction}
                />

                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <TableHeadNoPhoto
                            numSelected={selected.length}
                            rowCount={rows.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            headCells={headCells}
                        />

                        <TableBody>
                            {rows.slice().sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <StyledTableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <StyledTableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            align="left"
                                            sx={{
                                                fontWaight: '500'
                                            }}
                                        >
                                            <input value={row.name} 
                                                type="text" 
                                                placeholder='Name' 
                                                className='form__input full__length' 
                                                onChange={(e) => handleChangeName(e, row.id)}
                                            />
        
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <textarea value={row.description} 
                                                type="text" 
                                                placeholder='Name' 
                                                className='form__input full__length' 
                                                rows={10}
                                                onChange={(e) => handleChangeDescription(e, row.id)}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/ugcrecipes/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
                                            <RiDeleteBinLine className='table__icon' />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}

                            {emptyRows > 0 && (
                                <StyledTableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <StyledTableCell colSpan={7} />
                                </StyledTableRow>
                            )}
                        </TableBody>

                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[15, 25, 40]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
