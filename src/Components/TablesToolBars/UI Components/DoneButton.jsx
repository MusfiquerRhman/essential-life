import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import React from "react";

const DoneButton = React.memo((props) => {
    const { action, handleClickExecuteAction } = props;

    return (
        <Button
            id="action-button"
            aria-haspopup="true"
            onClick={handleClickExecuteAction}
            variant='contained'
            sx={{
                marginLeft: '1rem',
                marginRight: '1rem',
                padding: '0.5rem',
                borderRadius: '2rem'

            }}
            disabled={action === '' ? true : false}
        >
            <DoneIcon />
        </Button>
    )
})

export default DoneButton;