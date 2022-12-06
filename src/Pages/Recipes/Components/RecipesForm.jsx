import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { default as React, useCallback, useState } from 'react';
import AddChipsButton from '../../../Components/Forms/AddChipsButton';
import IOSSwitch from '../../../Styles/iOSSwitch';

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
    { title: 'Pulp Fiction', year: 1994 },]

const RecipeForm = React.memo((props) => {
    const { state, dispatch, ACTION_TYPE } = props;

    const [anchorElCategories, setAnchorElCategories] = useState(null);
    const openCategories = Boolean(anchorElCategories);

    const handleClickCategories = useCallback((event) => {
        setAnchorElCategories(event.currentTarget);
    }, []);

    const handleCloseCategories = useCallback(() => {
        setAnchorElCategories(null);
    }, []);

    const [anchorElRecipes, setAnchorElRecipes] = useState(null);
    const openRecipes = Boolean(anchorElRecipes);

    const handleClickRecipes = useCallback((event) => {
        setAnchorElRecipes(event.currentTarget);
    }, []);

    const handleCloseRecipes = useCallback(() => {
        setAnchorElRecipes(null);
    }, []);

    const handleChangeCheck = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.checked
            }
        })
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

    const handleChangeAddChips = (value, name) => {
        dispatch({
            type: ACTION_TYPE.ADD_CHIPS,
            payload: {
                value: value,
                name: name
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


    const [displayImage, setDisplayImage] = useState("");

    const imageSelectHandler = (event) => {
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
            <div className='switch__box flex__row'>
                <span>Make Features</span>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                        onChange={handleChangeCheck}
                        name="make_featured"
                        checked={state.make_featured}
                    />}
                />
            </div>


            <label htmlFor="recipe_name" className='form__label' style={{ marginTop: '2rem' }}>Recipe Name</label>
            <input type="text"
                placeholder='Recipe Name'
                id='recipe_name'
                className='form__input'
                onChange={onChangeInput}
                value={state.recipe_name}
                name='recipe_name'
            />


            <label htmlFor="method"
                className='form__label'
                style={{ marginTop: '1rem' }}
            >
                Method
            </label>
            <textarea type="text"
                placeholder='Method'
                id='method'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.method}
                name='method'
            />

            <label htmlFor="Systems" className='form__label'>Categories</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.categories.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'categories')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openCategories}
                    onClickAddButton={handleClickCategories}
                    anchorEl={anchorElCategories}
                    handleClose={handleCloseCategories}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='categories'
                />
            </div>

            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Related Recipes</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.related_recipes.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'related_recipes')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openRecipes}
                    onClickAddButton={handleClickRecipes}
                    anchorEl={anchorElRecipes}
                    handleClose={handleCloseRecipes}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='related_recipes'
                />
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
                        imageSelectHandler(e);
                    }} />
                </div>

                {imageSelected}
            </div>
        </>
    )
})

export default RecipeForm;