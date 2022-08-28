import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { default as React, useState } from 'react';
import { StyledTableCell, StyledTableRow } from '../../../Styles/StylesTableRowAndCell';

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


function EditUGCRecipeForm(props) {
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
                <h1 className='header__title'>Edit Recipe</h1>

                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }}>Update Recipe</Button>

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
                    <textarea type="text" placeholder='Method' id='#method' className='form__input' rows="10" />

                    <label htmlFor="Category" className='form__label'>Recipe Category</label>
                    <input type="text" placeholder='Recipe Category' id='#Category' className='form__input' />
                </div>

                <div className='form__container container__small' style={{marginLeft: '1rem'}}>
                    <label htmlFor="Status" className='form__label'>Status</label>
                    <input type="text" placeholder='Status' id='#Status' className='form__input' />

                    <label htmlFor="user" className='form__label'>Added by user</label>
                    <input type="text" placeholder='Added by user' id='#user' className='form__input' />

                    <label className='form__label' htmlFor="myfile">Select an Image:</label>
                    <input className='file__input' type="file" id="myfile" name="myfile" onChange={(e) => {
                        imageSelectHandeler(e.target.files);
                    }} />
                </div>

            </div>

            <div className='form__table--box'>
                <h1 className='header__title'>Ingredients</h1>

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
            </div>

            <div className='form__table--box'>
                <h1 className='header__title'>Custom Ingredients</h1>

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
            </div>
        </section>
    )
}
// quantity, measure, ingrediant
export default EditUGCRecipeForm