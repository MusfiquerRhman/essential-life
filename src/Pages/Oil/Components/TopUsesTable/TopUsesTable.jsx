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
import { cup, hand, nose } from '../../../../assests';
import TableBodyWrapper from '../../../../Components/table/TableBodyWrapper';
import TableRow from '../../../../Components/table/TableRow';
import TableHeadNoPhoto from '../../../../Components/TableHeads/TableHeadNoPhoto';
import ToolBarJustDelete from '../../../../Components/TablesToolBars/ToolBarJustDelete';
import { StyledTableCell } from '../../../../Styles/StylesTableRowAndCell';

const headCells = [
    {
        id: 'type',
        label: 'Name',
    },
    {
        id: 'name',
        label: 'Description',
    },
    {
        id: 'content',
        label: 'Uses icons',
    },
];


function createData(id, type, name, description, isCupActive, isNoseActive, isHandActive) {
    return { id, type, name, description, isCupActive, isNoseActive, isHandActive };
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


const TopUsesTable = React.memo((props) => {
    const { setSelectedArray, handleSelectDeleteAll } = props;

    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const {id} = useParams();

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
                    title="Top uses"
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
                                            <span className='table__name'>{`${row.type}: ${row.name}`}</span>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.description}</StyledTableCell>
                                        <StyledTableCell align="left">
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
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/oil/${id}/topuses/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
                />
            </Paper>
        </Box>
    );
})

export default TopUsesTable;
