import TableBody from '@mui/material/TableBody';
import React from "react";
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';

const TableBodyWrapper = React.memo((props) => {
    const { rows, page, rowsPerPage } = props;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <TableBody>
            {props.children}

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
    )
})

export default TableBodyWrapper;