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
import { cup, hand, nose } from '../../../../assests';
import '../../../../index.scss';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';

import * as React from 'react';

function createData(id, type, name, description, isCupActive, isNoseActive, isHandActive) {
    return {
        id,
        type,
        name,
        description,
        isCupActive,
        isNoseActive,
        isHandActive
    };
}

const rows = [
    createData(1, 'Oil', 'DigestZen', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', true, false, true),
    createData(2, 'Blend', 'Pepperment', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', false, false, true),
    createData(3, 'Oil', 'Petitgrain', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', true, true, true),
    createData(4, 'Oil', 'Ginger', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', true, false, true),
    createData(5, 'Blend', 'DigestZen', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', false, false, true),
    createData(6, 'Blend', 'Petitgrain', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', true, false, true),
    createData(7, 'Suplement', 'Petitgrain', 'Apply 1-2 drops to the abdomen. Take in a capsule or glass of water', false, false, true),
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
    } = props


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            setSelectedArray(newSelected)
            return;
        }
        setSelected([]);
        setSelectedArray([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
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


    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
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
                                            <span className='table__name'>{`${row.type}: ${row.name}`}</span>
                                        </TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">
                                            <div className='solution__usesicons--table'>
                                                <img src={cup} alt="A glass"
                                                    className='solution__usesicon--item'
                                                    style={row.isCupActive ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                                                />
                                                <img src={hand} alt="A hand"
                                                    className='solution__usesicon--item'
                                                    style={row.isHandActive ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                                                />
                                                <img src={nose} alt="A nose"
                                                    className='solution__usesicon--item'
                                                    style={row.isNoseActive ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <NavLink to={`/ailments/solution/edit/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
