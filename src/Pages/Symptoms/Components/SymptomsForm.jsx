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

function SymptomsForm(props) {
    const {
        state,
        dispatch,
        ACTION_TYPE,
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

    const onChangeInput = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }

    const handleDeleteBodySystem = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_BODY_SYSTEM,
            payload: {
                value: value
            }
        })
    }

    const handleChangeBodySystem = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_BODY_SYSTEM,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteRelatedBodySystem = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_RELETED_BODY_SYSTEM,
            payload: {
                value: value
            }
        })
    }

    const handleChangeRelatedBodySystem = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_RELETED_BODY_SYSTEM,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteAilments = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_AILMENT,
            payload: {
                value: value
            }
        })
    }

    const handleChangeAilments = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_AILMENT,
            payload: {
                value: value
            }
        })
    }



    return (
        <>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" 
                placeholder='Name' 
                id='name' 
                className='form__input' 
                onChange={onChangeInput} 
                value={state.name}
                name='name'
            />

            <label htmlFor="type" className='form__label'>Type</label>
            <select id="type" 
                className='full__length form__select' 
                onChange={onChangeInput} 
                value={state.type}
                name='type'
            >
                <option disabled value="">Choose an option</option>
                <option value="symptom">Symptom</option>
                <option value="ailment">Ailment</option>
            </select>

            <label htmlFor="Description" 
                className='form__label' 
                style={{ marginTop: '2rem' }}
            >
                Short Description
            </label>
            <textarea type="text" 
                placeholder='Short Description' 
                id='description' 
                className='form__input' 
                rows="10" 
                value={state.description} 
                onChange={onChangeInput}
                name='description'
            />

            <label htmlFor="Systems" className='form__label'>Body Systems</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.bodySystem.map((value) => (
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


            <label htmlFor="Systems" 
                className='form__label' 
                style={{ marginTop: '2rem' }}
            >
                Related Body Systems
            </label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.relatedBodySystem.map((value) => (
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

            <label htmlFor="Ailments" 
                className='form__label' 
                style={{ marginTop: '2rem' }}
            >
                Ailments
            </label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.ailments.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteAilments(value)} 
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
                            <MenuItem key={index} onClick={() => handleChangeAilments(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default SymptomsForm