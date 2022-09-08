import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { default as React, useState } from 'react';
import IngediantTable from './IngediantTable';

function createData(quantity, measure, ingrediant) {
    return { quantity, measure, ingrediant };
}

const rows = [
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila'),
    createData(3, 'drop', 'Vanila')
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#2e2f41',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#f0f2f6",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function EditUGCRemedyForm(props) {
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");
    const [action, setAction] = useState('')

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {

    }

    const imageSelectHandeler = (files) => {
        setImage(files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDisplayImage(reader.result);
            }
        };
        if (files[0] && files[0].type.match("image.*")) {
            reader.readAsDataURL(files[0]);
        }
    };

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Remedy</h1>

                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }}>Update Remedy</Button>

                    <select name="Days" id="days" defaultValue={action} onChange={handleChangeAction}>
                        <option disabled value="">Select an Action</option>
                        <option value="approve">Approve</option>
                        <option value="rejected">Rejected</option>
                    </select>

                    <Button
                        id="action-button"
                        aria-haspopup="true"
                        onClick={handleClickExecuteAction}
                        variant='contained'
                        sx={{
                            padding: '0.5rem',
                            borderRadius: '2rem',
                            marginLeft: '1rem'
                        }}
                        disabled={action === '' ? true : false}
                    >
                        <DoneIcon />
                    </Button>
                </div>

            </div>
            <div className='form__edit--container'>
                <div className='form__container'>
                    <label htmlFor="name" className='form__label'>Name</label>
                    <input type="text" placeholder='Name' id='#name' className='form__input' />

                    <label htmlFor="method" className='form__label'>Method</label>
                    <textarea disabled type="text" placeholder='Method' id='#method' className='form__input' rows="10" />

                    <label htmlFor="Category" className='form__label'>Remedy Category</label>
                    <input disabled type="text" placeholder='Remedy Category' id='#Category' className='form__input' />
                </div>

                <div className='form__container container__small'  style={{marginLeft: '1rem'}}>
                    <label htmlFor="Status" className='form__label'>Status</label>
                    <input disabled type="text" placeholder='Status' id='#Status' className='form__input' />

                    <label htmlFor="user" className='form__label'>Added by user</label>
                    <input disabled type="text" placeholder='Added by user' id='#user' className='form__input' />

                    <label className='form__label' htmlFor="myfile">Select an Image:</label>
                    <input className='file__input' type="file" id="myfile" name="myfile" onChange={(e) => {
                        imageSelectHandeler(e.target.files);
                    }} />
                </div>
            </div>

            <div className='form__table--box'>
                <h1 className='header__title'>Ingredients</h1>

                <IngediantTable />
            </div>

            <div className='form__table--box'>
                <h1 className='header__title'>Custom Ingredients</h1>

                <IngediantTable />
            </div>
        </section>
    )
}

export default EditUGCRemedyForm