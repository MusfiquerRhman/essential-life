import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import TableBodyWrapper from '../../../../Components/table/TableBodyWrapper';
import TableRow from '../../../../Components/table/TableRow';
import TableHeadNoPhoto from '../../../../Components/TableHeads/TableHeadNoPhoto';
import ToolBarJustDelete from '../../../../Components/TablesToolBars/ToolBarJustDelete';
import { StyledTableCell } from '../../../../Styles/StylesTableRowAndCell';

import * as React from 'react';
import { useCallback } from 'react';

const headCells = [
    {
        id: 'type',
        label: 'Solution',
    },
];

function createData(id, type, name) {
    return { id, type, name };
}

const rows = [
    createData(1, 'Oil', 'DigestZen'),
    createData(2, 'Blend', 'Pepperment'),
    createData(3, 'Oil', 'Petitgrain'),
    createData(4, 'Oil', 'Ginger'),
    createData(5, 'Blend', 'DigestZen'),
    createData(6, 'Blend', 'Petitgrain'),
    createData(7, 'Suplement', 'Petitgrain'),
];


const SupportingEnhancedTable = React.memo((props)=> {
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

    const handleRequestSort = useCallback((event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }, [order, orderBy]);

    const {
        setSupportiveSelectedArray,
        handleSelectDeleteAll,
    } = props


    const handleSelectAllClick = useCallback((event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            setSupportiveSelectedArray(newSelected)
            return;
        }
        setSelected([]);
        setSupportiveSelectedArray([]);
    }, [setSupportiveSelectedArray]);

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
                <ToolBarJustDelete
                    title="Supporting Solutions"
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
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
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        isItemSelected={isItemSelected}
                                        id={row.id}
                                        key={row.id}
                                        selected={selected}
                                        setSelected={setSelected}
                                        setSelectedArray={setSupportiveSelectedArray}
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
                                            <span className='table__name'>{`${row.type}: ${row.name}`}</span>
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/ailments/solution/supportive/edit/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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


export default SupportingEnhancedTable;