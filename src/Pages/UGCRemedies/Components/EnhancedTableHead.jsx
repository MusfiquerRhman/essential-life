import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import React from 'react';
import { StyledTableCell, StyledTableRow } from '../../../Styles/StylesTableRowAndCell';

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'public_recipe',
        label: 'Public Remedy',
    },
    {
        id: 'user',
        label: 'User',
    },
    {
        id: 'status',
        label: 'Status',
    },
    {
        id: 'rejection_reason',
        label: 'Rejection Reason',
    },
    {
        id: 'created_at',
        label: 'Created At',
    },
];


function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <StyledTableRow>
                <StyledTableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                        sx={{
                            color: '#ffffff',
                            '&.Mui-checked': {
                                color: '#FFFFFF',
                            },
                        }}
                    />
                </StyledTableCell>
                <StyledTableCell align='center'>
                    Photo
                </StyledTableCell>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={'left'}
                        padding={'normal'}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            sx={{
                                '&:hover':{
                                    color: '#FFF'
                                },
                            }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
                <StyledTableCell />
            </StyledTableRow>
        </TableHead>
    );
}

export default EnhancedTableHead