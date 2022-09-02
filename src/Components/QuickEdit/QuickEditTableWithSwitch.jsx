import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import IOSSwitch from '../../Styles/iOSSwitch';
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';
import ToolBarUGC from '../TablesToolBars/ToolBarUGC';
import QuickEditTableHead from './QuickEditTableHead';

function createData(id, name, description, featured) {
    return {
        id,
        name,
        description,
        featured
    };
}


export default function QuickEditTableWithSwitch(props) {
    const [rows, setrows] = useState([
        createData(1, 'wow1', 'Detailed Description for quick edit', true),
        createData(2, 'wow2', 'Detailed Description for quick edit', true),
        createData(3, 'wow3', 'Detailed Description for quick edit', true),
        createData(4, 'wow4', 'Detailed Description for quick edit', true),
        createData(5, 'wow5', 'Detailed Description for quick edit', true),
        createData(6, 'wow6', 'Detailed Description for quick edit', true),
        createData(7, 'wow7', 'Detailed Description for quick edit', true),
        createData(8, 'wow8', 'Detailed Description for quick edit', true),
        createData(9, 'wow9', 'Detailed Description for quick edit', true),
        createData(10, 'wow10', 'Detailed Description for quick edit', true),
        createData(11, 'wow11', 'Detailed Description for quick edit', true),
        createData(12, 'wow12', 'Detailed Description for quick edit', true),
        createData(13, 'wow13', 'Detailed Description for quick edit', true),
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


    const handleChangeName = (e, id, description, featured) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, name: e.target.value }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, [id]: { 'name': e.target.value, 'description': description, 'featured': featured }
        }))
    }


    const handleChangeDescription = (e, id, name, featured) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, description: e.target.value }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, [id]: { 'name': name, 'description': e.target.value, 'featured': featured }
        }))
    }

    const handleChangeCheck = (e, id, name, description) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, featured: e.target.checked }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, [id]: { 'name': name, 'description': description, 'featured': e.target.checked }
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
                                                onChange={(e) => handleChangeName(e, row.id, row.description, row.featured)}
                                                style={{ marginLeft: '1rem' }}
                                            />

                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <textarea value={row.description}
                                                type="text"
                                                placeholder='Name'
                                                className='form__input full__length'
                                                rows={10}
                                                style={{ marginLeft: '1rem' }}
                                                onChange={(e) => handleChangeDescription(e, row.id, row.name, row.featured)}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeCheck(e, row.id, row.name, row.description)}
                                                    name="make_featured"
                                                    checked={row.featured}
                                                />}
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
