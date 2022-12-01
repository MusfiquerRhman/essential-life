import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import TablePhotos from '../../../Components/Common/TablePhotos';
import TableBodyWrapper from '../../../Components/table/TableBodyWrapper';
import TableRow from '../../../Components/table/TableRow';
import TableHeadWithPhoto from '../../../Components/TableHeads/TableHeadWithPhoto';
import ToolBarForceUpdate from '../../../Components/TablesToolBars/ToolBarForceUpdate';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import getComparator from '../../helperFunctions';

import * as React from 'react';

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'short_description',
        label: 'Short Description',
    },
];

function createData(id, photo, name, short_description) {
    return {
        id,
        photo,
        name,
        short_description,
    };
}

const rows = [
    createData(1 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(2 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(3 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(4 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(5 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(6 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(7 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(8 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(9 ,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(10,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(11,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(12,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
    createData(13,'--', 'cleaning', 'Adding essential oils to your DIY cleaning solutions makes your home smell amazing, and gives your cleaning power a boost.'),
];

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
        action,
        setAction,
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
                <ToolBarForceUpdate
                    title="Categories"
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
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
                                            <NavLink to={`/categories/${row.id}`}><span className='table__name'>{row.name}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.short_description}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/categories/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
