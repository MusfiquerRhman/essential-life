import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import TablePhotos from '../../../Components/Common/TablePhotos';
import TableBodyWrapper from '../../../Components/table/TableBodyWrapper';
import TableRow from '../../../Components/table/TableRow';
import TableHeadWithPhoto from '../../../Components/TableHeads/TableHeadWithPhoto';
import ToolBarForceUpdateUGC from '../../../Components/TablesToolBars/ToolBarForceUpdateUGC';
import { StyledTableCell } from '../../../Styles/StylesTableRowAndCell';
import getComparator from '../../helperFunctions';


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
        id: 'featured',
        label: 'Featured',
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
        id: 'favourite Count',
        label: 'Favourite Count',
    },

];

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
            <ToolBarForceUpdateUGC
                    title={"Recipes"}
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
                        <TableBodyWrapper rows={rows} page={page} rowsPerPage={rowsPerPage}>
                            {rows.slice().sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        isItemSelected={isItemSelected}
                                        id={row.id}
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
                                            <NavLink to={`/recipes/${row.id}`}><span className='table__name'>{row.name}</span></NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell sx={{minWidth: '20rem'}} align="left">{row.method}</StyledTableCell>
                                        <StyledTableCell align="center"><div className='activity__balls' style={row.featured ? {background: "#3Ac073"} : {background: '#E74444'} }/></StyledTableCell>
                                        <StyledTableCell align="left">{row.user}</StyledTableCell>
                                        <StyledTableCell align="left">{row.created_at}</StyledTableCell>
                                        <StyledTableCell align="left">{row.favourite_count}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <NavLink to={`/recipes/${row.id}`} style={{color: '#000'}}><FiEdit className='table__icon' /></NavLink>
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
}
