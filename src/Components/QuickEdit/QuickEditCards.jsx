import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import IOSSwitch from '../../Styles/iOSSwitch';
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';
import ToolBarUGC from '../TablesToolBars/ToolBarUGC';
import QuickEditTableHead from './QuickEditTableHead';

function createData(id, title, ios, android, active, region) {
    return {
        id,
        title,
        ios,
        android,
        active,
        region
    };
}


export default function QuickEditCards(props) {
    const [rows, setrows] = useState([
        createData(1, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(2, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(3, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(4, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(5, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(6, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(7, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(8, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(9, 'Detailed Description for quick edit', true, false, true,  ['US', 'Canada', 'EU']),
        createData(10, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(11, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(12, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
        createData(13, 'Detailed Description for quick edit', true, false, true, ['US', 'Canada', 'EU']),
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

    const handleChangeName = (e, id, ios, android, active, region) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, title: e.target.value }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, 
            [id]: { 
                'title': e.target.value, 
                'ios': ios, 
                'android': android,  
                'active': active, 
                'region': region 
            }
        }))
    }


    const handleChangeIos = (e, id, title, android, active, region)=> {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, ios: e.target.checked }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, 
            [id]: { 
                'title': title, 
                'ios': e.target.checked, 
                'android': android,  
                'active': active, 
                'region': region
            }
        }))
    }

    const handleChangeAndroid = (e, id, title, ios, active, region)=> {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, android: e.target.checked }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, 
            [id]: { 
                'title': title, 
                'ios': ios, 
                'android': e.target.checked,  
                'active': active, 
                'region': region
            }
        }))
    }


    const handleChangeActive = (e, id, title, ios, android, region)=> {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                return { ...obj, active: e.target.checked }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, 
            [id]: { 
                'title': title, 
                'ios': ios, 
                'android': android,  
                'active': e.target.checked, 
                'region': region
            }
        }))
    }

    const handleChangeRegion = (id, title, ios, android, active, region, selectedRegion) => {
        const newArr = rows.map(obj => {
            if (obj.id === id) {
                if(obj.region.indexOf(selectedRegion) === -1){
                    return { ...obj, region: [...obj.region, selectedRegion] }
                }
                else {
                    return { ...obj, region: [...obj.region.filter(
                        currRegion => currRegion !== selectedRegion
                    )]}
                }
            }
            return obj;
        })
        setrows(newArr)
        setmodifiedItems(prevState => ({
            ...prevState, 
            [id]: { 
                'title': title, 
                'ios': ios, 
                'android': android,  
                'active': active, 
                'region': [ region.indexOf(selectedRegion) === -1 
                        ? [...region, selectedRegion]
                        : [...region.filter(currRegion => currRegion !== selectedRegion)]
                    ]
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
                                                fontWaight: '500'
                                            }}
                                        >
                                            <input value={row.title}
                                                type="text"
                                                placeholder='Name'
                                                className='form__input full__length'
                                                onChange={(e) => handleChangeName(e, row.id, row.ios, row.android, row.active, row.region)}
                                                style={{ marginLeft: '1rem', minWidth: '20rem' }}
                                            />

                                        </StyledTableCell>
                                        <StyledTableCell align="center"> 
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeIos(e, row.id, row.title, row.android,  row.active, row.region)}
                                                    name="make_featured"
                                                    checked={row.ios}
                                                />}
                                                sx={{marginLeft: '1rem'}}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeAndroid(e, row.id, row.title, row.ios, row.active, row.region)}
                                                    name="make_featured"
                                                    checked={row.android}
                                                />}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }}
                                                    onChange={(e) => handleChangeActive(e, row.id, row.title, row.ios, row.android, row.region)}
                                                    name="make_featured"
                                                    checked={row.active}
                                                />}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <div className='switch__box'>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Australia")}
                                                    variant={row.region.indexOf('Australia') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Australia
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Canada")}
                                                    variant={row.region.indexOf('Canada') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Canada
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "China")}
                                                    variant={row.region.indexOf('China') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    China
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Costa Rica")}
                                                    variant={row.region.indexOf('Costa Rica') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Costa Rica
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "EU")}
                                                    variant={row.region.indexOf('EU') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    EU
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Guatemala")}
                                                    variant={row.region.indexOf('Guatemala') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Guatemala
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Hong Kong")}
                                                    variant={row.region.indexOf('Hong Kong') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Hong Kong
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Japan")}
                                                    variant={row.region.indexOf('Japan') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Japan
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Korea")}
                                                    variant={row.region.indexOf('Korea') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Korea
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Malaysia")}
                                                    variant={row.region.indexOf('Malaysia') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Malaysia
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Mexico")}
                                                    variant={row.region.indexOf('Mexico') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Mexico
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "New Zealand")}
                                                    variant={row.region.indexOf('New Zealand') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    New Zealand
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Singapore")}
                                                    variant={row.region.indexOf('Singapore') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Singapore
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "Taiwan")}
                                                    variant={row.region.indexOf('Taiwan') === -1 ? 'text' : 'contained'}
                                                    sx={{ marginRight: '1rem' }}
                                                >
                                                    Taiwan
                                                </Button>
                                                <Button onClick={() => handleChangeRegion(row.id, row.title, row.ios, row.android, row.active, row.region, "US")}
                                                    variant={row.region.indexOf('US') === -1 ? 'text' : 'contained'}
                                                >
                                                    US
                                                </Button>
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
