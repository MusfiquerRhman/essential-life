import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import IOSSwitch from '../../Styles/iOSSwitch';
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';
import ToolBarUGC from '../TablesToolBars/ToolBarUGC';
import QuickEditTableHead from './QuickEditTableHead';

function createData(id, title, ios, android, active, region) {
    return { id, title, ios, android, active, region };
}

const RegionButton = (props) => {
    return (
        <Button onClick={() => props.handleChangeRegion(props.row, props.selectedRegion)}
            variant={props.row.region.indexOf(props.selectedRegion) === -1 ? 'text' : 'contained'}
            sx={{ marginRight: '0.75rem', marginBottom: '0.75rem' }}
        >
            {props.selectedRegion}
        </Button>
    )
}

const QuickEditCards = (props) => {
    const [isPending, startTransition] = useTransition();
    
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

    const [rows, setRows] = useState([
        createData(1, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(2, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(3, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(4, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(5, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(6, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(7, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(8, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(9, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(10, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(11, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(12, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(13, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(14, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(15, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(16, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(17, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(18, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(19, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(21, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(22, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(23, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(24, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
    ])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rowsOnPage, setRowsOnPage] = useState(rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));

    useEffect(() => {
        setRowsOnPage(rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
    }, [page, rows, rowsPerPage]);


    const handleChangeTitle = useCallback((e, row) => {
        const newArr = rowsOnPage.map(obj => {
            if (obj.id === row.id) {
                return { ...obj, title: e.target.value }
            }
            return obj;
        })
        setRowsOnPage(newArr);
        
        startTransition(() => {
            let rowIndex = rows.findIndex(obj => obj.id === row.id);
            let copyOfRow = [...rows];
            let selectedItem = {...copyOfRow[rowIndex]};
            selectedItem.title = e.target.value;
            copyOfRow[rowIndex] = selectedItem;
            setRows(copyOfRow);

            setmodifiedItems(prevState => ({
                ...prevState,
                [row.id]: {
                    'title': e.target.value,
                    'ios': row.ios,
                    'android': row.android,
                    'active': row.active,
                    'region': row.region
                }
            }))
        })
    }, [rows, rowsOnPage, setmodifiedItems]);

    const handleChangeIos = useCallback((e, row) => {
        const newArr = rowsOnPage.map(obj => {
            if (obj.id === row.id) {
                return { ...obj, ios: e.target.checked }
            }
            return obj;
        })
        setRowsOnPage(newArr);

        startTransition(() => {
            let rowIndex = rows.findIndex(obj => obj.id === row.id);
            let copyOfRow = [...rows];
            let selectedItem = {...copyOfRow[rowIndex]};
            selectedItem.ios = e.target.checked;
            copyOfRow[rowIndex] = selectedItem;
            setRows(copyOfRow);

            setmodifiedItems(prevState => ({
                ...prevState,
                [row.id]: {
                    'title': row.title,
                    'ios': e.target.checked,
                    'android': row.android,
                    'active': row.active,
                    'region': row.region
                }
            }))
        })
    }, [rows, rowsOnPage, setmodifiedItems]);

    const handleChangeAndroid = useCallback((e, row) => {
        const newArr = rowsOnPage.map(obj => {
            if (obj.id === row.id) {
                return { ...obj, android: e.target.checked }
            }
            return obj;
        })
        setRowsOnPage(newArr);

        startTransition(() => {
            let rowIndex = rows.findIndex(obj => obj.id === row.id);
            let copyOfRow = [...rows];
            let selectedItem = {...copyOfRow[rowIndex]};
            selectedItem.android = e.target.checked;
            copyOfRow[rowIndex] = selectedItem;
            setRows(copyOfRow);

            setmodifiedItems(prevState => ({
                ...prevState,
                [row.id]: {
                    'title': row.title,
                    'ios': row.ios,
                    'android': e.target.checked,
                    'active': row.active,
                    'region': row.region
                }
            }))
        })
    }, [rows, rowsOnPage, setmodifiedItems]);

    const handleChangeActive = useCallback((e, row) => {
        const newArr = rowsOnPage.map(obj => {
            if (obj.id === row.id) {
                return { ...obj, active: e.target.checked }
            }
            return obj;
        })
        setRowsOnPage(newArr);

        startTransition(() => {
            let rowIndex = rows.findIndex(obj => obj.id === row.id);
            let copyOfRow = [...rows];
            let selectedItem = {...copyOfRow[rowIndex]};
            selectedItem.active = e.target.checked;
            copyOfRow[rowIndex] = selectedItem;
            setRows(copyOfRow);

            setmodifiedItems(prevState => ({
                ...prevState,
                [row.id]: {
                    'title': row.title,
                    'ios': row.ios,
                    'android': row.android,
                    'active': e.target.checked,
                    'region': row.region
                }
            }))
        })
    }, [rows, rowsOnPage, setmodifiedItems]);

    const handleChangeRegion = useCallback((row, selectedRegion) => {
        const newArr = rowsOnPage.map(obj => {
            if (obj.id === row.id) {
                if (obj.region.indexOf(selectedRegion) === -1) {
                    return { ...obj, region: [...obj.region, selectedRegion] }
                }
                else {
                    return {
                        ...obj, region: [...obj.region.filter(
                            currRegion => currRegion !== selectedRegion
                        )]
                    }
                }
            }
            return obj;
        })
        setRowsOnPage(newArr);
        
        startTransition(() => {
            let rowIndex = rows.findIndex(obj => obj.id === row.id);
            let copyOfRow = [...rows];
            let selectedItem = {...copyOfRow[rowIndex]};
            
            let region = selectedItem.region.indexOf(selectedRegion) === -1
                        ? [...selectedItem.region, selectedRegion]
                        : [...selectedItem.region.filter(currRegion => currRegion !== selectedRegion)]

            selectedItem.region = region

            copyOfRow[rowIndex] = selectedItem;
            setRows(copyOfRow);

            setmodifiedItems(prevState => ({
                ...prevState,
                [row.id]: {
                    'title': row.title,
                    'ios': row.ios,
                    'android': row.android,
                    'active': row.active,
                    'region': region
                }
            }))
        })
    }, [rows, rowsOnPage, setmodifiedItems])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);

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
                            {rowsOnPage.map((row, index) => {
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
                                            <input value={row.title}
                                                type="text"
                                                placeholder='Name'
                                                className='form__input full__length'
                                                onChange={(e) => handleChangeTitle(e, row)}
                                                style={{ marginLeft: '1rem', minWidth: '20rem' }}
                                            />

                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeIos(e, row)}
                                                    name="make_featured"
                                                    checked={row.ios}
                                                />}
                                                sx={{ marginLeft: '1rem' }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeAndroid(e, row)}
                                                    name="make_featured"
                                                    checked={row.android}
                                                />}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeActive(e, row)}
                                                    name="make_featured"
                                                    checked={row.active}
                                                />}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <div className='switch__box'>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Australia'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Canada'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='China'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Costa Rica'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='EU'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Guatemala'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Hong Kong'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Japan'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Korea'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Malaysia'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Mexico'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='New Zealand'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Singapore'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='Taiwan'/>
                                                <RegionButton handleChangeRegion={handleChangeRegion} row={row} selectedRegion='US'/>
                                            </div>
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

                {isPending && (
                    <h5 style={{padding: '1rem'}}>Processing...</h5>
                )}

                {!isPending && (
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
                
            </Paper>
        </Box>
    );
}

export default QuickEditCards;