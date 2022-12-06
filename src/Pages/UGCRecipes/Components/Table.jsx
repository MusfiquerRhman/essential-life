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
import TablePhotos from '../../../Components/Common/TablePhotos';
import TableBodyWrapper from '../../../Components/table/TableBodyWrapper';
import TableRow from '../../../Components/table/TableRow';
import TableHeadWithPhoto from '../../../Components/TableHeads/TableHeadWithPhoto';
import ToolBarUGC from '../../../Components/TablesToolBars/ToolBarUGC';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import getComparator from '../../helperFunctions';

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'public_recipe',
        label: 'Public Recipe',
    },
    {
        id: 'user',
        label: 'User',
    },
    {
        id: 'status',
        label: 'Status',
    },
    {
        id: 'rejection_reason',
        label: 'Rejection Reason',
    },
    {
        id: 'created_at',
        label: 'Created At',
    },
];


function createData(id, photo, name, public_recipe, user, status, rejection_reason, created_at) {
    return { id, photo, name, public_recipe, user, status, rejection_reason, created_at };
}

const rows = [
    createData(1 ,'--', 'wow1', '--', 'chef', 'Private', '--', 'Aug 11 2022'),
    createData(2 ,'--', 'wow2', '--', 'chef', 'Private', '--', 'Aug 12 2022'),
    createData(3 ,'--', 'wow3', 'Summer Citrus Breeze Perfume', 'chef', 'Private', '--', 'Aug 13 2022'),
    createData(4 ,'--', 'wow4', '--', 'ahef', 'Private', '--', 'Aug 13 2022'),
    createData(5 ,'--', 'wow5', '--', 'chef', 'Private', '--', 'Aug 14 2022'),
    createData(6 ,'--', 'wow6', '--', 'chef', 'Private', '--', 'Aug 13 2022'),
    createData(7 ,'--', 'wow7', '--', 'fhef', 'Private', '--', 'Aug 13 2022'),
    createData(8 ,'--', 'wow8', '--', 'chef', 'Private', '--', 'Aug 13 2022'),
    createData(9 ,'--', 'wow9', '--', 'chef', 'Private', '--', 'Aug 10 2022'),
    createData(10 ,'--', 'wow10', '--', 'vhef', 'Private', '--', 'Aug 13 2022'),
    createData(11 ,'--', 'wow11', '--', 'chef', 'Private', '--', 'Aug 13 2022'),
    createData(12 ,'--', 'wow12', '--', 'chef', 'Private', '--', 'Aug 13 2022'),
    createData(13 ,'--', 'wow13', '--', 'chef', 'Private', '--', 'Aug 13 2022'),
];


export default function EnhancedTable(props) {
    const {
        setSelectedArray,
        handleSelectDeleteAll,
        contentStatus,
        setcontentStatus,
        action,
        setAction,
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
                <ToolBarUGC
                    title={'Recipes'}
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
                        <TableHeadWithPhoto
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
                                        <TablePhotos row={row} />
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
                                            <NavLink to={`/ugcrecipes/${row.id}`}><span className='table__name'>{row.name}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.public_recipe}</StyledTableCell>
                                        <StyledTableCell align="left"><span className='table__userName'>{row.user}</span> </StyledTableCell>
                                        <StyledTableCell align="left">{row.status}</StyledTableCell>
                                        <StyledTableCell align="left">{row.rejection_reason}</StyledTableCell>
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/ugcrecipes/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
