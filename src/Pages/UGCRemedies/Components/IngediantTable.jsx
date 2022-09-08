import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { default as React, useState } from 'react';
import { StyledTableCell, StyledTableRow } from "../../../Styles/StylesTableRowAndCell";

const rows = [
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila')
];

function createData(quantity, measure, ingrediant) {
    return { quantity, measure, ingrediant };
}

const IngediantTable = () => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <StyledTableRow>
                <StyledTableCell>QUANTITY</StyledTableCell>
                <StyledTableCell align="left">MEASURE</StyledTableCell>
                <StyledTableCell align="left">INGREDIENT</StyledTableCell>
            </StyledTableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, index) => (
                <StyledTableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <StyledTableCell component="th" scope="row">
                        {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.measure}</StyledTableCell>
                    <StyledTableCell align="left">{row.ingrediant}</StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
  )
}

export default IngediantTable