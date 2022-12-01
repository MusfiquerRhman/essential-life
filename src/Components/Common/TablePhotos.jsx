import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React from "react";
import { StyledTableCell } from "../../Styles/StylesTableRowAndCell";

const TablePhotos = props => {
    const {row} = props;
    return (
        <React.Fragment>
            {row.photo === '--' ? (
                <StyledTableCell align="center"><HorizontalRuleIcon /></StyledTableCell>
            ) : (
                <StyledTableCell align="center">
                    <img className='table__img' src={row.photo} alt='product' />
                </StyledTableCell>
            )}
        </React.Fragment>
    )
}

export default TablePhotos;