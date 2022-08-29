import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import TableHeadWithPhoto from '../../../Components/TableHeads/TableHeadWithPhoto';
import ToolBarUGC from '../../../Components/TablesToolBars/ToolBarUGC';
import { StyledTableCell, StyledTableRow } from '../../../Styles/StylesTableRowAndCell';

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'public_recipe',
        label: 'Public Remedy',
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
    return {
        id,
        photo,
        name,
        public_recipe,
        user,
        status,
        rejection_reason,
        created_at
    };
}

const rows = [
    createData(1 ,'--', 'wow1', '--', 'chef', 'Private', '--', 'Aug 11 2022'),
    createData(2 ,'--', 'wow2', '--', 'chef', 'Private', '--', 'Aug 12 2022'),
    createData(3 ,'--', 'wow3', '--', 'chef', 'Private', '--', 'Aug 13 2022'),
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
        contentStatus,
        setcontentStatus,
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
                <ToolBarUGC
                    title={'Remedies'}
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

                        <TableBody>
                            {rows.slice().sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <StyledTableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
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
                                        {row.photo === '--' ? (
                                            <StyledTableCell align="center">{row.photo}</StyledTableCell>
                                        ) : (
                                            <StyledTableCell align="center"><img className='table__img' src={row.photo} alt='product'/></StyledTableCell>
                                        )}
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
                                            <span className='table__name'>{row.name}</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.public_recipe}</StyledTableCell>
                                        <StyledTableCell align="left"><span className='table__userName'>{row.user}</span> </StyledTableCell>
                                        <StyledTableCell align="left">{row.status}</StyledTableCell>
                                        <StyledTableCell align="left">{row.rejection_reason}</StyledTableCell>
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/ugcremedy/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
                                            <RiDeleteBinLine className='table__icon' />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}

                            {emptyRows > 0 && (
                                <StyledTableCell
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <StyledTableCell colSpan={7} />
                                </StyledTableCell>
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
