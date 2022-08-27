import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { default as React, useState } from 'react';

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

function AilmentForm(props) {
    const {
        bodySystemChip,
        handleChangeBodySystem,
        handleDeleteBodySystem,
        relatedBodySystemChip,
        handleDeleteRelatedBodySystem,
        handleChangeRelatedBodySystem,
        handleDeleteSymptoms,
        handleChangeSymptoms,
        symptoms,
        setName,
        name,
        type,
        setType,
        description,
        setDescription,
    } = props;

    const [anchorElBodySystem, setAnchorElBodySystem] = React.useState(null);
    const openBodySystem = Boolean(anchorElBodySystem);

    const handleClickBodySystem = (event) => {
        setAnchorElBodySystem(event.currentTarget);
    };

    const handleCloseBodySystem = () => {
        setAnchorElBodySystem(null);
    };

    const [anchorElRelatedBodySystem, setAnchorElRelatedBodySystem] = useState(null);
    const openRelatedBodySystem = Boolean(anchorElRelatedBodySystem);

    const handleClickRelatedBodySystem = (event) => {
        setAnchorElRelatedBodySystem(event.currentTarget);
    };

    const handleCloseRelatedBodySystem = () => {
        setAnchorElRelatedBodySystem(null);
    };

    const [anchorElSymptoms, setAnchorElSymptoms] = React.useState(null);
    const openSymptoms = Boolean(anchorElSymptoms);

    const handleClickSymptoms = (event) => {
        setAnchorElSymptoms(event.currentTarget);
    };
    
    const handleCloseSymptoms = () => {
        setAnchorElSymptoms(null);
    };

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeType = (e) => {
        setType(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }


    return (
        <>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" placeholder='Name' id='#name' className='form__input' onChange={onChangeName} value={name}/>

            <label htmlFor="type" className='form__label'>Type</label>
            <select name="Days" id="type" className='full__length form__select' onChange={onChangeType} value={type}>
                <option disabled value="">Choose an option</option>
                <option value="ailment">Ailment</option>
                <option value="symptom">Symptom</option>
            </select>

            <label htmlFor="Description" className='form__label' style={{ marginTop: '2rem' }}>Short Description</label>
            <textarea type="text" 
                placeholder='Short Description' 
                id='#Description' 
                className='form__input' 
                rows="10" 
                value={description} 
                onChange={onChangeDescription}
            />

            <label htmlFor="Systems" className='form__label'>Body Systems</label>
            <div className='chip__container'>
                <div className='chips'>
                    {bodySystemChip.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteBodySystem(value)}
                        />
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
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteRelatedBodySystem(value)}
                        />
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
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteSymptoms(value)} 
                        />
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
        </>
    )
}

export default AilmentForm