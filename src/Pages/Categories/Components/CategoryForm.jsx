import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { default as React, useCallback, useState } from 'react';
import AddChipsButton from '../../../Components/Forms/AddChipsButton';

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

const CategoryForm = React.memo((props) => {
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");

    const {
        recipe,
        setShortDescription,
        shortDescription,
        handleDeleteRecipe,
        setName,
        name,
        addRecipe
    } = props;

    const imageSelectHandler = (files) => {
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

    const [anchorElRecipes, setAnchorElRecipes] = useState(null);
    const openRecipes = Boolean(anchorElRecipes);

    const handleClickRecipes = useCallback((event) => {
        setAnchorElRecipes(event.currentTarget);
    }, []);

    const handleCloseRecipes = useCallback(() => {
        setAnchorElRecipes(null);
    }, []);

    const onChangeShortDescription = (e) => {
        setShortDescription(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
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
                            onDelete={() => handleDeleteRecipe(value)}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openRecipes}
                    onClickAddButton={handleClickRecipes}
                    anchorEl={anchorElRecipes}
                    handleClose={handleCloseRecipes}
                    handleChange={addRecipe}
                    names={names}
                />
            </div>

            <div className='image__option flex__row'>
                <div>
                    <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem', marginRight: '2rem' }}>Image</label>
                    <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                        imageSelectHandler(e);
                    }} />
                </div>


                {imageSelected}
            </div>
        </>
    )
})

export default CategoryForm