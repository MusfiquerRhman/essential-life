import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import '../../../index.scss';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';

import * as React from 'react';

function createData(id, title, ios, android, active, regions) {
    return {
        id,
        title,
        ios,
        android,
        active,
        regions,
    };
}

const rows = [
    createData(1 ,'Best Products Best Prices at OilLife.com', true, false, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(2 ,'Best Products Best Prices at OilLife.com', true, false, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(3 ,'Best Products Best Prices at OilLife.com', false, true, false, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(4 ,'Best Products Best Prices at OilLife.com', true, false, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(5 ,'Best Products Best Prices at OilLife.com', true, false, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(6 ,'Best Products Best Prices at OilLife.com', true, true, false, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(7 ,'Best Products Best Prices at OilLife.com', true, false, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(8 ,'Best Products Best Prices at OilLife.com', false, true, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
    createData(9 ,'Best Products Best Prices at OilLife.com', true, true, true, 'Australia, Canada, China, Costa Rica, EU, Guatemala, Hong Kong, Japan, Korea, Malaysia, Mexico, New Zealand, Singapore, Taiwan, US'),
];

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

export default function EnhancedTable(props) {
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
        visibleInRegion,
        setVisibleInregion,
        showForIOS,
        setShowForIOS,
        isActive,
        setIsActive,
        showForAndroid,
        setShowForAndroid,
        handleClickExecuteAction,
    } = props


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            setSelectedArray(newSelected)
            return;
        }
        setSelected([]);
        setSelectedArray([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
        setSelectedArray(newSelected);
    };

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
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
                    visibleInRegion={visibleInRegion}
                    setVisibleInregion={setVisibleInregion}
                    showForIOS={showForIOS}
                    setShowForIOS={setShowForIOS}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    showForAndroid={showForAndroid}
                    setShowForAndroid={setShowForAndroid}
                    handleClickExecuteAction={handleClickExecuteAction}
                />

                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={rows.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />

                        <TableBody>
                            {rows.slice().sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            align="left"
                                            sx={{
                                                fontWaight: '500'
                                            }}
                                        >
                                            <span className='table__name'>{row.title}</span>
                                        </TableCell>
                                        <TableCell align="left"><div className='activity__balls' style={row.ios ? {background: "#3Ac073"} : {background: '#E74444'} }/></TableCell>
                                        <TableCell align="left"><div className='activity__balls' style={row.android ? {background: "#3Ac073"} : {background: '#E74444'} }/></TableCell>
                                        <TableCell align="left"><div className='activity__balls' style={row.active ? {background: "#3Ac073"} : {background: '#E74444'} }/></TableCell>
                                        <TableCell align="left">{row.regions}</TableCell>
                                        <TableCell align='right'>
                                            <NavLink to={`/cards/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
                                            <RiDeleteBinLine className='table__icon' />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}

                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={7} />
                                </TableRow>
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
