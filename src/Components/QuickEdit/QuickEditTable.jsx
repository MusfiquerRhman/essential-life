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

function createData(id, name, description) {
    return { id, name, description };
}

const QuickEditTable = React.memo((props) => {
    const [rows, setRows] = useState([
        createData(1, 'wow1', 'Detailed Description for quick edit'),
        createData(2, 'wow2', 'Detailed Description for quick edit'),
        createData(3, 'wow3', 'Detailed Description for quick edit'),
        createData(4, 'wow4', 'Detailed Description for quick edit'),
        createData(5, 'wow5', 'Detailed Description for quick edit'),
        createData(6, 'wow6', 'Detailed Description for quick edit'),
        createData(7, 'wow7', 'Detailed Description for quick edit'),
        createData(8, 'wow8', 'Detailed Description for quick edit'),
        createData(9, 'wow9', 'Detailed Description for quick edit'),
        createData(10, 'wow10', 'Detailed Description for quick edit'),
        createData(11, 'wow11', 'Detailed Description for quick edit'),
        createData(12, 'wow12', 'Detailed Description for quick edit'),
        createData(13, 'wow13', 'Detailed Description for quick edit'),
    ])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

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


    const handleChangeName = (e, id, description) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, name: e.target.value }
            }
            return obj;
        })
        setRows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, [id]: {
                'name': e.target.value, 
                'description': description
            }
        }))
    }


    const handleChangeDescription = (e, id, name) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, description: e.target.value }
            }
            return obj;
        })
        setRows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, [id]: {
                'name': name, 
                'description': e.target.value
            }
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
                                                fontWeight: '500'
                                            }}
                                        >
                                            <input value={row.name}
                                                type="text"
                                                placeholder='Name'
                                                className='form__input full__length'
                                                onChange={(e) => handleChangeName(e, row.id, row.description)}
                                                style={{marginLeft: '1rem'}}
                                            />

                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <textarea value={row.description}
                                                type="text"
                                                placeholder='Name'
                                                className='form__input full__length'
                                                rows={10}
                                                style={{marginLeft: '1rem'}}
                                                onChange={(e) => handleChangeDescription(e, row.id, row.name)}
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
})


export default QuickEditTable;