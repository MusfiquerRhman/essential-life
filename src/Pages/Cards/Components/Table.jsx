import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import TableBodyWrapper from '../../../Components/table/TableBodyWrapper';
import TableRow from '../../../Components/table/TableRow';
import TableHeadNoPhoto from '../../../Components/TableHeads/TableHeadNoPhoto';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import EnhancedTableToolbar from './EnhancedTableToolbar';

import * as React from 'react';

const headCells = [
    {
        id: 'title',
        label: 'Title',
    },
    {
        id: 'ios',
        label: 'Show For iOS',
    },
    {
        id: 'android',
        label: 'Show for Android',
    },
    {
        id: 'active',
        label: 'Active',
    },
    {
        id: 'visibility',
        label: 'Region Visibility',
    },
];



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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

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
                        <TableHeadNoPhoto
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={rows.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            headCells={headCells}
                        />
                        <TableBodyWrapper rows={rows} page={page} rowsPerPage={rowsPerPage}>
                            {rows.slice().sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        isItemSelected={isItemSelected}
                                        id={row.id}
                                        selected={selected}
                                        setSelected={setSelected}
                                        setSelectedArray={setSelectedArray}
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
                                            <NavLink to={`/cards/${row.id}`}><span className='table__name'>{row.title}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <div className='activity__balls' style={row.ios ? {background: "#3Ac073"} : {background: '#E74444'} }/>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <div className='activity__balls' style={row.android ? {background: "#3Ac073"} : {background: '#E74444'} }/>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <div className='activity__balls' style={row.active ? {background: "#3Ac073"} : {background: '#E74444'} }/>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.regions}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/cards/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
                                            <RiDeleteBinLine className='table__icon' />
                                        </StyledTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBodyWrapper>
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
                    sx={{ borderTop: '1px solid rgba(0,0,0,0.1)'}}
                />
            </Paper>
        </Box>
    );
}
