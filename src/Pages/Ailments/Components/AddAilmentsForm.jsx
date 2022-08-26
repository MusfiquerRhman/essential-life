import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { default as React, useState } from 'react';
import '../ailmentsStyles.scss';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function AddAilmentsForm() {
    const [bodySystemChip, setBodySystemChip] = React.useState([]);
    const [relatedBodySystemChip, setRelatedBodySystemChip] = React.useState([]);
    const [symptoms, setSymptoms] = React.useState([]);

    const [anchorElRelatedBodySystem, setAnchorElRelatedBodySystem] = React.useState(null);
    const openRelatedBodySystem = Boolean(anchorElRelatedBodySystem);
    const handleClickRelatedBodySystem = (event) => {
        setAnchorElRelatedBodySystem(event.currentTarget);
    };
    const handleCloseRelatedBodySystem = () => {
        setAnchorElRelatedBodySystem(null);
    };

    const handleChangeRelatedBodySystem = (value) => {
        setRelatedBodySystemChip(oldValues => [...oldValues, value]);
    };

    const handleDeleteRelatedBodySystem = (selectedName) => {
        let chipName = relatedBodySystemChip.filter(name => name !== selectedName)
        setRelatedBodySystemChip(chipName)
    };

    const [anchorElBodySystem, setAnchorElBodySystem] = React.useState(null);
    const openBodySystem = Boolean(anchorElBodySystem);
    const handleClickBodySystem = (event) => {
        setAnchorElBodySystem(event.currentTarget);
    };
    const handleCloseBodySystem = () => {
        setAnchorElBodySystem(null);
    };

    const handleChangeBodySystem = (value) => {
        setBodySystemChip(oldValues => [...oldValues, value]);
    };

    const handleDeleteBodySystem = (selectedName) => {
        let chipName = bodySystemChip.filter(name => name !== selectedName)
        setBodySystemChip(chipName)
    };

    const [anchorElSymptoms, setAnchorElSymptoms] = React.useState(null);
    const openSymptoms = Boolean(anchorElSymptoms);
    const handleClickSymptoms = (event) => {
        setAnchorElSymptoms(event.currentTarget);
    };
    const handleCloseSymptoms = () => {
        setAnchorElSymptoms(null);
    };

    const handleChangeSymptoms = (value) => {
        setSymptoms(oldValues => [...oldValues, value]);
    };

    const handleDeleteSymptoms = (selectedName) => {
        let chipName = symptoms.filter(name => name !== selectedName)
        setSymptoms(chipName)
    };


    return (
        <section>
            <h1>New Ailment</h1>
            <div className='form__container'>
                <label htmlFor="name" className='form__label'>Name</label>
                <input type="text" placeholder='Name' id='#name' className='form__input' />

                <label htmlFor="type" className='form__label'>Type</label>
                <select name="Days" id="type" className='full__length form__select'>
                    <option disabled value="">Choose an option</option>
                    <option value="ailment">Ailment</option>
                    <option value="symptom">Symptom</option>
                </select>

                <label htmlFor="Description" className='form__label' style={{ marginTop: '2rem' }}>Short Description</label>
                <textarea type="text" placeholder='Short Description' id='#Description' className='form__input' rows="10" />

                <label htmlFor="Systems" className='form__label'>Body Systems</label>
                <div className='chip__container'>
                    <div className='chips'>
                        {bodySystemChip.map((value) => (
                            <Chip sx={{marginRight: '0.5rem'}} key={value} label={value} onDelete={() => handleDeleteBodySystem(value)} />
                        ))}
                    </div>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={openBodySystem ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openBodySystem ? 'true' : undefined}
                            onClick={handleClickBodySystem}
                            startIcon={<AddIcon />}
                            sx={{ borderRadius: '2rem' }}
                        >
                            Add
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElBodySystem}
                            open={openBodySystem}
                            onClose={handleCloseBodySystem}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {names.map((item, index) => (
                                <MenuItem key={index} onClick={() => handleChangeBodySystem(item)}>{item}</MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>


                <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Related Body Systems</label>
                <div className='chip__container'>
                    <div className='chips'>
                        {relatedBodySystemChip.map((value) => (
                            <Chip sx={{marginRight: '0.5rem'}} key={value} label={value} onDelete={() => handleDeleteRelatedBodySystem(value)} />
                        ))}
                    </div>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={openRelatedBodySystem ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openRelatedBodySystem ? 'true' : undefined}
                            onClick={handleClickRelatedBodySystem}
                            startIcon={<AddIcon />}
                            sx={{ borderRadius: '2rem' }}
                        >
                            Add
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElRelatedBodySystem}
                            open={openRelatedBodySystem}
                            onClose={handleCloseRelatedBodySystem}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {names.map((item, index) => (
                                <MenuItem key={index} onClick={() => handleChangeRelatedBodySystem(item)}>{item}</MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>

                <label htmlFor="Systems" className='form__label'>Symptoms</label>
                <div className='chip__container'>
                    <div className='chips'>
                        {symptoms.map((value) => (
                            <Chip sx={{marginRight: '0.5rem'}} key={value} label={value} onDelete={() => handleDeleteSymptoms(value)} />
                        ))}
                    </div>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={openSymptoms ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openSymptoms ? 'true' : undefined}
                            onClick={handleClickSymptoms}
                            startIcon={<AddIcon />}
                            sx={{ borderRadius: '2rem' }}
                        >
                            Add
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElSymptoms}
                            open={openSymptoms}
                            onClose={handleCloseSymptoms}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {names.map((item, index) => (
                                <MenuItem key={index} onClick={() => handleChangeSymptoms(item)}>{item}</MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Recipe</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddAilmentsForm