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
import ToolBarForceUpdate from '../../../Components/TablesToolBars/ToolBarForceUpdate';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import getComparator from '../../helperFunctions';

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'fact',
        label: 'Fact',
    },
    {
        id: 'featured',
        label: "Featured"
    }
];

function createData(id, photo, name, fact, featured) {
    return { id, photo, name, fact, featured };
}

const rows = [
    createData(1,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
    createData(2,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', false),
    createData(3,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
    createData(4,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
    createData(5,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', false),
    createData(6,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
    createData(7,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
    createData(8,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
    createData(9,'--', 'DDR Prime', 'Cellular damage from free radicals is an underlying contributor to many of today’s diseases. This powerful antioxidant blend helps promote cellular health and protect long-term wellness.', true),
];


const EnhancedTable = React.memo((props) => {
    const { setSelectedArray, handleSelectDeleteAll, action, setAction, handleClickExecuteAction } = props;
    
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
                <ToolBarForceUpdate
                    title="Supplements"
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
                                            <NavLink to={`/supplements/${row.id}`}><span className='table__name'>{row.name}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.fact}</StyledTableCell>
                                        <StyledTableCell align="center"><div className='activity__balls' style={row.featured ? {background: "#3Ac073"} : {background: '#E74444'} }/></StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/supplements/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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