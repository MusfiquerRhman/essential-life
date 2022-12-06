import TableHead from '@mui/material/TableHead';
import React from 'react';
import { StyledTableCell, StyledTableRow } from '../../Styles/StylesTableRowAndCell';


const QuickEditTableHead = React.memo((props) => {
    const {headCells } = props;

    return (
        <TableHead>
            <StyledTableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={'left'}
                        padding={'normal'}
                    >
                        {headCell.label}
                    </StyledTableCell>
                ))}
                <StyledTableCell />
            </StyledTableRow>
        </TableHead>
    );
})

export default QuickEditTableHead