import React from "react";
import { StyledTableRow } from "../../Styles/StylesTableRowAndCell";

const TableRow = (props) => {
    const { isItemSelected, id, selected, setSelected, setSelectedArray } = props;

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
        setSelectedArray(newSelected);
    };

    return (
        <StyledTableRow
            hover
            onClick={(event) => handleClick(event, id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={id}
            selected={isItemSelected}
        >
            {props.children}
        </StyledTableRow>
    )
}

export default TableRow;