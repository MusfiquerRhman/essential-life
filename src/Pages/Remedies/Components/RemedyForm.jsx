import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

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

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }, ]


function RemedyForm(props) {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const [displayImage, setDisplayImage] = useState("");
    const [relatedRemedies, setRelatedRemedies] = React.useState([]);
    const [anchorElRelatedRemedies, setAnchorElRelatedRemedies] = useState(null);
    const openRelatedRemedies = Boolean(anchorElRelatedRemedies);

    const handleClickRelatedRemedies = (event) => {
        setAnchorElRelatedRemedies(event.currentTarget);
    };

    const handleCloseRelatedRemedies = () => {
        setAnchorElRelatedRemedies(null);
    };


    const handleChangeRelatedRemedies = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_REMEDY,
            payload: {
                value: value
            }
        })
    };

    const handleDeleteRelatedRemedies = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_REMEDY,
            payload: {
                value: value
            }
        })
    };

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

    const onChangeInput = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }

    
    const onChangeUser = (e, newValue) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: e.target.name,
                value: newValue
            }
        })
    }

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
                placeholder='Name' 
                id='name' 
                className='form__input' 
                name='name'
                onChange={onChangeInput}
                value={state.name}
            />

            <label htmlFor="method" className='form__label'>Method</label>
            <textarea type="text" 
                placeholder='Method' 
                id='method' 
                className='form__input' 
                rows="10" 
                name='method'
                value={state.method}
                onChange={onChangeInput}
            />

            <label htmlFor="Systems" className='form__label'>Related Remedies</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.remedies.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteRelatedRemedies(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openRelatedRemedies ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openRelatedRemedies ? 'true' : undefined}
                        onClick={handleClickRelatedRemedies}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElRelatedRemedies}
                        open={openRelatedRemedies}
                        onClose={handleCloseRelatedRemedies}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeRelatedRemedies(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>

            <label htmlFor="user" className='form__label' style={{ marginTop: '2rem' }}>User</label>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Autocomplete
                    id="free-solo-demo"
                    options={top100Films.map((option) => option.title)}
                    isOptionEqualToValue={(option, value) => option.value === value}
                    name='user'
                    onChange={(e, newValue) => {
                        onChangeUser(e, newValue);
                    }}
                    renderInput={(params) =>
                        <TextField {...params}
                            placeholder="Search for an User"
                        />
                    }
                />
            </Stack>

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

export default RemedyForm