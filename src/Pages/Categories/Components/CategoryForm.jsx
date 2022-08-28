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

function CategoryForm(props) {
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");

    const {
        handleDeleteAilmentAndSymptoms,
        recipe,
        setShortDescription,
        shortDescription,
        handleDeleteRecipe,
        setName,
        name,
    } = props;

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

    const [anchorElReceipes, setAnchorElReceipes] = useState(null);
    const openReceipes = Boolean(anchorElReceipes);

    const handleClickReceipes = (event) => {
        setAnchorElReceipes(event.currentTarget);
    };

    const handleCloseReceipes = () => {
        setAnchorElReceipes(null);
    };

    const onChangeShortDescription = (e) => {
        setShortDescription(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" placeholder='Name' id='#name' className='form__input' value={name} onChange={handleChangeName} />

            <label htmlFor="Description" className='form__label' style={{ marginTop: '2rem' }}>Short Description</label>
            <textarea type="text"
                placeholder='Short Description'
                id='#Description'
                className='form__input'
                rows="10"
                value={shortDescription}
                onChange={onChangeShortDescription}
            />

            <label htmlFor="Recipes" className='form__label' style={{ marginTop: '2rem' }}>Recipes</label>
            <div className='chip__container'>
                <div className='chips'>
                    {recipe.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteAilmentAndSymptoms(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openReceipes ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openReceipes ? 'true' : undefined}
                        onClick={handleClickReceipes}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElReceipes}
                        open={openReceipes}
                        onClose={handleCloseReceipes}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleDeleteRecipe(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>

            <label className='form__label' htmlFor="myfile">Select an Image:</label>
            <input className='file__input' type="file" id="myfile" name="myfile" onChange={(e) => {
                imageSelectHandeler(e.target.files);
            }} />
        </>
    )
}

export default CategoryForm