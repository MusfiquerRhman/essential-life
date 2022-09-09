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

function BodySystemForm(props) {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const [anchorElRemedy, setAnchorElRemedy] = React.useState(null);
    const [anchorElAilmentAndSymptoms, setAnchorElAilmentAndSymptoms] = useState(null);
    const [anchorElAssociatedProperties, setAnchorElAssociatedProperties] = React.useState(null);
    const [displayImage, setDisplayImage] = useState("");

    const openRemedy = Boolean(anchorElRemedy);
    const openAilmentAndSymptoms = Boolean(anchorElAilmentAndSymptoms);
    const openAssociatedProperties = Boolean(anchorElAssociatedProperties);

    const handleClickRemedy = (event) => {
        setAnchorElRemedy(event.currentTarget);
    };

    const handleClickAilmentAndSymptoms = (event) => {
        setAnchorElAilmentAndSymptoms(event.currentTarget);
    };

    const handleClickAssociatedProperties = (event) => {
        setAnchorElAssociatedProperties(event.currentTarget);
    };

    const handleCloseRemedy = () => {
        setAnchorElRemedy(null);
    };

    const handleCloseAilmentAndSymptoms = () => {
        setAnchorElAilmentAndSymptoms(null);
    };

    const handleCloseAssociatedProperties = () => {
        setAnchorElAssociatedProperties(null);
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

    const handleDeleteChips = (value, name) => {
        dispatch({
            type: ACTION_TYPE.DELETE_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }

    const handleChangeAddChips = (value, name) => {
        dispatch({
            type: ACTION_TYPE.ADD_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }


    const imageSelectHandeler = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.files[0]
            }
        })
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDisplayImage(reader.result);
            }
        };
        if (event.target.files[0] && event.target.files[0].type.match("image.*")) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    let imageSelected = "";
    if (displayImage !== "") {
        imageSelected = (
            <div className='img__container'>
                <img src={displayImage} className="img__box" alt="product" />
            </div>
        );
    }

    return (
        <>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" 
                placeholder='name' 
                id='name' 
                className='form__input' 
                onChange={onChangeInput} 
                value={state.name} 
                name='name'
            />

            <label htmlFor="Description" className='form__label' style={{ marginTop: '2rem' }}>Short Description</label>
            <textarea type="text"
                placeholder='Short Description'
                id='Description'
                className='form__input'
                rows="10"
                value={state.description}
                onChange={onChangeInput}
                name='description'
            />

            <label htmlFor="Tip" className='form__label' style={{ marginTop: '2rem' }}>Usage Tip</label>
            <textarea type="text"
                placeholder='Usage Tip'
                id='#Tip'
                className='form__input'
                rows="10"
                value={state.tip}
                onChange={onChangeInput}
                name='tip'
            />

            <label htmlFor="Systems" className='form__label'>Remedies</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.remedies.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'remedies')}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openRemedy ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openRemedy ? 'true' : undefined}
                        onClick={handleClickRemedy}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElRemedy}
                        open={openRemedy}
                        onClose={handleCloseRemedy}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddChips(item, 'remedies')}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>


            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Ailments &amp; Symptoms</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.ailmentAndSymptoms.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'ailmentAndSymptoms')}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openAilmentAndSymptoms ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAilmentAndSymptoms ? 'true' : undefined}
                        onClick={handleClickAilmentAndSymptoms}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAilmentAndSymptoms}
                        open={openAilmentAndSymptoms}
                        onClose={handleCloseAilmentAndSymptoms}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddChips(item, 'ailmentAndSymptoms')}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>

            <label htmlFor="Systems" className='form__label'>Associated propertiesname</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.associatedProperties.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'associatedProperties')}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openAssociatedProperties ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAssociatedProperties ? 'true' : undefined}
                        onClick={handleClickAssociatedProperties}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAssociatedProperties}
                        open={openAssociatedProperties}
                        onClose={handleCloseAssociatedProperties}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddChips(item, 'associatedProperties')}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
            <div className='image__option flex__row'>
                <div>
                    <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem', marginRight: '2rem' }}>Image</label>
                    <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                        imageSelectHandeler(e);
                    }} />
                </div>


                {imageSelected}
            </div>
        </>
    )
}

export default BodySystemForm