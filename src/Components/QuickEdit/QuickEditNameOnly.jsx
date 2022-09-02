import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';
import ToolBarUGC from '../TablesToolBars/ToolBarUGC';
import QuickEditTableHead from './QuickEditTableHead';

function createData(id, name) {
    return {
        id,
        name,
    };
}

export default function QuickEditNameOnly(props) {
    const [rows, setrows] = useState([
        createData(  1, 'wow1'),
        createData(  2, 'wow2'),
        createData(  3, 'wow3'),
        createData(  4, 'wow4'),
        createData(  5, 'wow5'),
        createData(  6, 'wow6'),
        createData(  7, 'wow7'),
        createData(  8, 'wow8'),
        createData(  9, 'wow9'),
        createData(10, 'wow10'),
        createData(11, 'wow11'),
        createData(12, 'wow12'),
        createData(13, 'wow13'),
    ])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);

    const {
        headCells,
        handleSelectDeleteAll,
        contentStatus,
        setcontentStatus,
        action,
        setAction,
        handleClickExecuteAction,
        setmodifiedItems,
    } = props


    const handleChangeName = (e, id) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, name: e.target.value }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, [id]: {'name': e.target.value}
        }))
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <ToolBarUGC
                    title={'Quick Edit'}
                    numSelected={0}
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
                        <QuickEditTableHead
                            rowCount={rows.length}
                            headCells={headCells}
                        />

                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <StyledTableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={false}
                                    >
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
                                            <input value={row.name}
                                                type="text"
                                                placeholder='Name'
                                                className='form__input full__length'
                                                onChange={(e) => handleChangeName(e, row.id)}
                                                style={{marginLeft: '1rem'}}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
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
