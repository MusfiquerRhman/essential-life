import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useCallback, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import ActivityBall from '../../../Components/Common/ActivityBall';
import TableBodyWrapper from '../../../Components/table/TableBodyWrapper';
import TableRow from '../../../Components/table/TableRow';
import TableHeadNoPhoto from '../../../Components/TableHeads/TableHeadNoPhoto';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import getComparator from '../../helperFunctions';
import EnhancedTableToolbar from './EnhancedTableToolbar';

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
    return { id, title, ios, android, active, regions};
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

const EnhancedTable = React.memo((props) => {
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
    } = props;

    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');

    const handleRequestSort = useCallback((event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }, [order, orderBy]);

    const handleSelectAllClick = useCallback((event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            setSelectedArray(newSelected)
            return;
        }
        setSelected([]);
        setSelectedArray([]);
    }, [setSelectedArray]);

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
                                        key={row.id}
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
                                                fontWeight: '500'
                                            }}
                                        >
                                            <NavLink to={`/cards/${row.id}`}><span className='table__name'>{row.title}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <ActivityBall data={row.ios}/>
                                        </StyledTableCell>      
                                    
                                        <StyledTableCell align="center">
                                            <ActivityBall data={row.android}/>
                                        </StyledTableCell>

                                        <StyledTableCell align="center">
                                            <ActivityBall data={row.active}/>
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
})

export default EnhancedTable;
