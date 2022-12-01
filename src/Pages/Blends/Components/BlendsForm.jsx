import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as React } from 'react';
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

const BlendsForm = (props) => {
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

    const handleChangeAddIngredient = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_INGRIDIANT,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteIngredient = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_INGRIDIANT,
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


            <label htmlFor="name" className='form__label' style={{ marginTop: '2rem' }}>Name</label>
            <input type="text"
                placeholder='Recipe Name'
                id='name'
                className='form__input'
                onChange={onChangeInput}
                value={state.name}
                name='name'
            />


            <label htmlFor="fact"
                className='form__label'
                style={{ marginTop: '1rem' }}
            >
                Fact
            </label>
            <textarea type="text"
                placeholder='fact'
                id='fact'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.fact}
                name='fact'
            />

            <label htmlFor="emotion_1" className='form__label' style={{ marginTop: '2rem' }}>Emotion 1</label>
            <input type="text"
                placeholder='Emotion 1'
                id='emotion_1'
                className='form__input'
                onChange={onChangeInput}
                value={state.emotion_1}
                name='emotion_1'
            />

            <label htmlFor="emotion_2" className='form__label' style={{ marginTop: '2rem' }}>Emotion 2</label>
            <input type="text"
                placeholder='Emotion 2'
                id='emotion_2'
                className='form__input'
                onChange={onChangeInput}
                value={state.emotion_2}
                name='emotion_2'
            />

            <label htmlFor="emotion_3" className='form__label' style={{ marginTop: '2rem' }}>Emotion 3</label>
            <input type="text"
                placeholder='Emotion 2'
                id='emotion_3'
                className='form__input'
                onChange={onChangeInput}
                value={state.emotion_3}
                name='emotion_3'
            />

            <label htmlFor="type" className='form__label'>Safety Information</label>
            <select name="safety_information"
                id="type"
                className='full__length form__select'
                onChange={onChangeInput}
                value={state.safety_information}
            >
                <option disabled value="">Choose an option</option>
                <option value="light">Avoid exposure to sunlight or UV rays for 12 hours after application.</option>
                <option value="dark">Avoid exposure to sunlight or UV rays for 12 hours after application.</option>
            </select>

            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Ingrediants</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.ingredients.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteIngredient(value)}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openCategories}
                    onClickAddButton={handleClickCategories}
                    anchorEl={anchorElCategories}
                    handleClose={handleCloseCategories}
                    handleChange={handleChangeAddIngredient}
                    names={names}
                />
            </div>

            <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem' }}>Image</label>
            <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                imageSelectHandeler(e);
            }} />
        </>
    )
}

export default BlendsForm