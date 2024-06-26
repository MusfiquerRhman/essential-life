import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useCallback, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import TablePhotos from '../../../Components/Common/TablePhotos';
import TableBodyWrapper from '../../../Components/table/TableBodyWrapper';
import TableRow from '../../../Components/table/TableRow';
import TableHeadWithPhoto from '../../../Components/TableHeads/TableHeadWithPhoto';
import ToolBarJustDelete from '../../../Components/TablesToolBars/ToolBarJustDelete';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import getComparator from '../../helperFunctions';

const headCells = [
    {
        id: 'type',
        label: 'Type',
    },
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'content',
        label: 'Content',
    },
    {
        id: 'association',
        label: "Association"
    },
    {
        id: 'user',
        label: 'User'
    },
    {
        id: 'created_at',
        label: 'Created At'
    }
];

function createData(id, photo, type, name, content, association, user, created_at) {
    return { id, photo, type, name, content, association, user, created_at };
}

const rows = [
    createData(1, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(2, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(3, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(4, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(5, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'

        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(6, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(7, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),

    createData(8, '--', 'Recipe Category', 'Home',
        'Absolutely loving this app! I also have the book but thoroughly enjoy having these on the go and at my finger tips! One of the main reasons I use EO is to support my emotions. They are so powerful and it would be great to have recipes easily available for this.'
        , '--', 'hwinters', 'Jun 07 2019'
    ),
];


const EnhancedTable = React.memo((props) => {
    const { setSelectedArray, handleSelectDeleteAll } = props;
    
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
                <ToolBarJustDelete
                    title="Content Suggestion"
                    numSelected={selected.length}
                    handleSelectDeleteAll={handleSelectDeleteAll}
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
                                            <span className='table__name'>{row.type}</span>

                                        </StyledTableCell>
                                        <StyledTableCell align="left"><span className='table__userName'>{row.name}</span> </StyledTableCell>
                                        <StyledTableCell sx={{minWidth: '20rem'}} align="left">{row.content}</StyledTableCell>
                                        <StyledTableCell align="left">{row.association}</StyledTableCell>
                                        <StyledTableCell align="left">{row.user}</StyledTableCell>
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            {/* <NavLink to={`/oil/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink> */}
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