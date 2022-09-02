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
import { StyledTableCell, StyledTableRow } from '../../../Styles/StylesTableRowAndCell';
import ToolBar from './ToolBar';

const headCells = [
    {
        id: 'created_at',
        label: 'Created AT',
    },
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'email',
        label: 'Email',
    },
    {
        id: 'subscription_type',
        label: 'Subscription Type',
    },
    {
        id: 'Subscription_expires_at',
        label: 'Subscription Expires At',
    },
    {
        id: 'Subscription_active',
        label: 'Subscription Active',
    },
];

function createData(id, photo, created_at, name, email, subscription_type, Subscription_expires_at, Subscription_active) {
    return {
        id,
        photo,
        created_at,
        name,
        email,
        subscription_type,
        Subscription_expires_at,
        Subscription_active,
    };
}

const rows = [
    createData( 1, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true ),
    createData( 2, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData( 3, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData( 4, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', false  ),
    createData( 5, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData( 6, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', false  ),
    createData( 7, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', false  ),
    createData( 8, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData( 9, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData(10, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData(11, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', true  ),
    createData(12, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', false  ),
    createData(13, '--', 'Aug 11 2022', 'Vanessa Berlanga', 'vb1206@gmail.com', 'Legacy', '2038-01-19 9:14:07 AM', false  ),
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
        onChangeAdminSelect
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
                <ToolBar
                    title='Users'
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
                    contentStatus={contentStatus}
                    setcontentStatus={setcontentStatus}
                    action={action}
                    setAction={setAction}
                    handleClickExecuteAction={handleClickExecuteAction}
                    onChangeAdminSelect={onChangeAdminSelect}
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
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
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
                                            <NavLink to={`/users/${row.id}`}><span className='table__name'>{row.name}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                                        <StyledTableCell align="left">{row.subscription_type}</StyledTableCell>
                                        <StyledTableCell align="left">{row.Subscription_expires_at}</StyledTableCell>
                                        <StyledTableCell align="left"><div className='activity__balls' style={row.Subscription_active ? {background: "#3Ac073"} : {background: '#E74444'} }/></StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/users/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
