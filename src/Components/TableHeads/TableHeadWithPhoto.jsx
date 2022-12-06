import React from 'react';
import { StyledTableCell } from '../../Styles/StylesTableRowAndCell';
import TableHeadNoPhoto from './TableHeadNoPhoto';

const TableHeadWithPhoto = React.memo((props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } = props;

    return (
        <TableHeadNoPhoto
            onSelectAllClick={onSelectAllClick}
            order={order}
            orderBy={orderBy}
            numSelected={numSelected}
            rowCount={rowCount}
            onRequestSort={onRequestSort}
            headCells={headCells}
        >
            <StyledTableCell align='center'>
                Photo
            </StyledTableCell>
        </TableHeadNoPhoto>
    );
})

export default TableHeadWithPhoto