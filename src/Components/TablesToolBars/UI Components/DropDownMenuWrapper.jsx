import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from "react";

const DropDownMenuWrapper = React.memo((props) => {
    const { value, handleChange, label } = props;

    return (
        <React.Fragment>
            <FormControl variant="standard" fullWidth sx={{ minWidth: '10rem' }}>
                <InputLabel id="demo-simple-select-label" sx={{ border: 'none' }}>{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                    sx={{ margin: '0' }}
                >
                    {props.children}
                </Select>
            </FormControl>
        </React.Fragment>
    )
})

export default DropDownMenuWrapper;