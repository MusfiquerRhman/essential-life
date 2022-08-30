import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { default as React } from 'react';
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

const RecipeForm = (props) => {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const [anchorElCategories, setAnchorElCategories] = React.useState(null);
    const openCategories = Boolean(anchorElCategories);

    const handleClickCategories = (event) => {
        setAnchorElCategories(event.currentTarget);
    };

    const handleCloseCategories = () => {
        setAnchorElCategories(null);
    };

    const [anchorElRecipes, setAnchorElRecipes] = React.useState(null);
    const openRecipes = Boolean(anchorElRecipes);

    const handleClickRecipes = (event) => {
        setAnchorElRecipes(event.currentTarget);
    };

    const handleCloseRecipes = () => {
        setAnchorElRecipes(null);
    };


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

    const handleChangeAddCategories = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_CATEGORY,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteCategories = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_CATEGORY,
            payload: {
                value: value
            }
        })
    }

    const handleChangeAddRecipes = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_RELETED_RECIPES,
            payload: {
                value: value
            }
        })
    }


    const handleDeleteRecips = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_RELETED_RECIPES,
            payload: {
                value: value
            }
        })
    }

    const imageSelectHandeler = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.files
            }
        })
    };


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
                            onDelete={() => handleDeleteCategories(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openCategories ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCategories ? 'true' : undefined}
                        onClick={handleClickCategories}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElCategories}
                        open={openCategories}
                        onClose={handleCloseCategories}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddCategories(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>

            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Related Recipes</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.related_recipes.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteRecips(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openRecipes ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openRecipes ? 'true' : undefined}
                        onClick={handleClickRecipes}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElRecipes}
                        open={openRecipes}
                        onClose={handleCloseRecipes}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddRecipes(item)}>{item}</MenuItem>
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

            <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem' }}>Background Image</label>
            <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                imageSelectHandeler(e);
            }} />
        </>
    )
}

export default RecipeForm;