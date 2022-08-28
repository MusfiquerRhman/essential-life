import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
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

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }, ]

function AddRemedyForm() {
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");
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
        let exist = relatedRemedies.indexOf(value);

        if (exist === -1) {
            setRelatedRemedies(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteRelatedRemedies = (selectedName) => {
        setRelatedRemedies(previousChips => previousChips.filter(name => name !== selectedName))
    };


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
            <h1>New Remedy</h1>
            <div className='form__container'>
                <label htmlFor="name" className='form__label'>Name</label>
                <input type="text" placeholder='Name' id='#name' className='form__input' />

                <label htmlFor="method" className='form__label'>Method</label>
                <textarea type="text" placeholder='Method' id='#method' className='form__input' rows="10" />

                <label htmlFor="Systems" className='form__label'>Related Remedies</label>
                <div className='chip__container'>
                    <div className='chips'>
                        {relatedRemedies.map((value) => (
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

                <label htmlFor="user" className='form__label'>User</label>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Autocomplete
                        id="free-solo-demo"
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => 
                            <TextField {...params} 
                                placeholder="Search for an User" 
                            />
                        }
                    />
                </Stack>

                <label className='form__label' htmlFor="myfile">Select an Image:</label>
                <input className='file__input' type="file" id="myfile" name="myfile" onChange={(e) => {
                    imageSelectHandeler(e.target.files);
                }} />

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Remedy</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddRemedyForm