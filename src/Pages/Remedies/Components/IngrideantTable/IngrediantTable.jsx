import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useCallback, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink, useParams } from 'react-router-dom';
import TableBodyWrapper from '../../../../Components/table/TableBodyWrapper';
import TableRow from '../../../../Components/table/TableRow';
import TableHeadNoPhoto from '../../../../Components/TableHeads/TableHeadNoPhoto';
import ToolBarJustDelete from '../../../../Components/TablesToolBars/ToolBarJustDelete';
import { StyledTableCell } from '../../../../Styles/StylesTableRowAndCell';

const headCells = [
    {
        id: 'quantity',
        label: 'Quantity',
    },
    {
        id: 'measure',
        label: 'Measure',
    },
    {
        id: 'custom_name',
        label: 'Custom name (instead of related oil/blend)',
    },
    {
        id: 'related',
        label: 'Related Oil/Blend',
    },
    {
        id: 'remedy',
        label: 'Remedy'
    }
];

function createData(id, quantity, measure, custom_name, related, remedy) {
    return { id, quantity, measure, custom_name, related, remedy };
}

const rows = [
    createData(1, 3, 'drop', 'custom name', 'related date', 'Allergies'),
    createData(2, 4, 'drop', 'custom name', 'related date', 'Allergies'),
    createData(3, 7, 'drop', 'custom name', 'related date', 'Allergies'),
    createData(4, 9, 'drop', 'custom name', 'related date', 'Allergies'),
    createData(5, 1, 'drop', 'custom name', 'related date', 'Allergies'),
];

const IngrediantTable = React.memo((props) => {
    const { setSupportiveSelectedArray, handleSelectDeleteAll } = props;

    const {id} = useParams()
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
                    title="Remedy Ingredient"
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
                                        <StyledTableCell>{row.quantity}</StyledTableCell>
                                        <StyledTableCell>{row.measure}</StyledTableCell>
                                        <StyledTableCell>{row.custom_name}</StyledTableCell>
                                        <StyledTableCell>{row.related}</StyledTableCell>
                                        <StyledTableCell>{row.remedy}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/remedies/${id}/ingredients/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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

export default IngrediantTable;