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
import { StyledTableCell, StyledTableRow } from '../../../Styles/StylesTableRowAndCell';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';

import * as React from 'react';

function createData(id, photo, name, method, featured, user, created_at, favourite_count) {
    return {
        id,
        photo,
        name,
        method,
        featured,
        user,
        created_at,
        favourite_count
    };
}

let desc = 'Choose from any of the following oils to enhance the flavor of this bread: Oregano, Thyme, Basil. Stir together essential oil drops and honey. In a large bowl, combine water, yeast, and honey/essential oil mixture. Let stand for 5 minutes. In a separate bowl, combine salt and flours. Stir flour mixture in gradually to water mixture until flour has been absorbed and the dough forms a ball. In a mixer or by hand, knead dough until it is moderately stiff, smooth, and elastic. Lightly spray a bowl with nonstick spray. Place dough in bowl, cover with a towel or plastic wrap (spray with nonstick spray), and let rise until doubled in size. Remove dough from bowl, and punch down. Let rest for 10 minutes. Spray an 8x4” bread loaf pan with nonstick spray. Shape dough to form a loaf and place in loaf pan. Let rise again until doubled in size, but not much higher than top of loaf pan. Put into a cold oven. Bake in a 350 degrees oven for 25-30 minutes or more until golden on top and sides pull away from pan.';

const rows = [
    createData( 1 ,'--', 'Wheat Herb Bread', desc, true, '--', 'Aug 16 2022', 18),
    createData( 2 ,'--', 'cleaning', 'In a small glass spray bottle mix oils together. Spray a thin layer directly onto rash area and reapply as needed.', true, '--', 'Aug 16 2022', 18),
    createData( 3 ,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 19),
    createData( 4 ,'--', 'cleaning', desc, false, '--', 'Aug 16 2022', 17),
    createData( 5 ,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 13),
    createData( 6 ,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 38),
    createData( 7 ,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 58),
    createData( 8 ,'--', 'cleaning', desc, false, '--', 'Aug 16 2022', 78),
    createData( 9 ,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 13),
    createData(10,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 46),
    createData(11,'--', 'cleaning', desc, false, '--', 'Aug 16 2022', 17),
    createData(12,'--', 'cleaning', desc, false, '--', 'Aug 16 2022', 54),
    createData(13,'--', 'cleaning', desc, true, '--', 'Aug 16 2022', 18),
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
                <EnhancedTableToolbar
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
                                        <StyledTableCell align="left">{row.method}</StyledTableCell>
                                        <StyledTableCell align="center"><div className='activity__balls' style={row.featured ? {background: "#3Ac073"} : {background: '#E74444'} }/></StyledTableCell>
                                        <StyledTableCell align="left">{row.user}</StyledTableCell>
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
                                        <StyledTableCell align="left">{row.favourite_count}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/recipe/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
