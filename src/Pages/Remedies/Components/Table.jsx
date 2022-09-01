import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import TableHeadNoPhoto from '../../../Components/TableHeads/TableHeadNoPhoto';
import ToolBarForceUpdateUGC from '../../../Components/TablesToolBars/ToolBarForceUpdateUGC';
import { StyledTableCell, StyledTableRow } from '../../../Styles/StylesTableRowAndCell';

import * as React from 'react';

function createData(id, name, method, user, created_at, favourite_count) {
    return {
        id, name, method, user, created_at, favourite_count
    };
}

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'method',
        label: 'Method',
    },
    {
        id: 'user',
        label: 'User',
    },
    {
        id: 'created_at',
        label: 'Created At',
    },
    {
        id: 'favourite_count',
        label: 'Favourite Count',
    },
];


const rows = [
    createData(1 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 408),
    createData(2 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 409),
    createData(3 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 410),
    createData(4 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 458),
    createData(5 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 448),
    createData(6 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 488),
    createData(7 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 498),
    createData(8 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 908),
    createData(9 ,'Allergies', 'Blend and apply one drop behind ears, temples, and thymus', '--', 'Aug 12 2022', 508),
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
                <ToolBarForceUpdateUGC
                    title={"Remedies"}
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
                                        <StyledTableCell align="left">{row.method}</StyledTableCell>
                                        <StyledTableCell align="left">{row.user} </StyledTableCell>
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
                                        <StyledTableCell align="left">{row.favourite_count}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/remedies/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
