import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as React, useState } from 'react';
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

const OilForm = (props) => {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const [anchorElTopProperties, setAnchorElTopProperties] = React.useState(null);
    const openTopProperties = Boolean(anchorElTopProperties);

    const handleClickTopProperties = (event) => {
        setAnchorElTopProperties(event.currentTarget);
    };

    const handleCloseTopProperties = () => {
        setAnchorElTopProperties(null);
    };

    const [anchorElMainConstituents, setAnchorElMainConstituents] = React.useState(null);
    const openMainConstituents = Boolean(anchorElMainConstituents);

    const handleClickMainConstituents = (event) => {
        setAnchorElMainConstituents(event.currentTarget);
    };

    const handleCloseMainConstituents = () => {
        setAnchorElMainConstituents(null);
    };

    const [anchorElSourcingMethods, setAnchorElSourcingMethods] = React.useState(null);
    const openSourcingMethods = Boolean(anchorElSourcingMethods);

    const handleClickSourcingMethods = (event) => {
        setAnchorElSourcingMethods(event.currentTarget);
    };

    const handleCloseSourcingMethods = () => {
        setAnchorElSourcingMethods(null);
    };

    const [anchorElBlendsWith, setAnchorElBlendsWith] = React.useState(null);
    const openBlendsWith = Boolean(anchorElBlendsWith);

    const handleClickBlendsWith = (event) => {
        setAnchorElBlendsWith(event.currentTarget);
    };

    const handleCloseBlendsWith = () => {
        setAnchorElBlendsWith(null);
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


            <label htmlFor="name" className='form__label' style={{ marginTop: '2rem' }}>Name</label>
            <input type="text"
                placeholder='Recipe Name'
                id='name'
                className='form__input'
                onChange={onChangeInput}
                value={state.name}
                name='name'
            />


            <label htmlFor="latine_name" className='form__label' style={{ marginTop: '2rem' }}>Latine Name</label>
            <input type="text"
                placeholder='Latine Name'
                id='latine_name'
                className='form__input'
                onChange={onChangeInput}
                value={state.latine_name}
                name='latine_name'
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
                placeholder='Emotion 3'
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


            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Top Properties</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.top_properties.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'top_properties')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openTopProperties}
                    onClickAddButton={handleClickTopProperties}
                    anchorEl={anchorElTopProperties}
                    handleClose={handleCloseTopProperties}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='top_properties'
                />
            </div>


            {/* Main Constituents */}
            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Main Constituents</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.main_constituents.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'main_constituents')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openMainConstituents}
                    onClickAddButton={handleClickMainConstituents}
                    anchorEl={anchorElMainConstituents}
                    handleClose={handleCloseMainConstituents}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='main_constituents'
                />
            </div>


            <label htmlFor="emotion_from" className='form__label' style={{ marginTop: '2rem' }}>Emotion From</label>
            <input type="text"
                placeholder='Emotion From'
                id='emotion_from'
                className='form__input'
                onChange={onChangeInput}
                value={state.emotion_from}
                name='emotion_from'
            />


            <label htmlFor="emotion_to" className='form__label' style={{ marginTop: '2rem' }}>Emotion To</label>
            <input type="text"
                placeholder='Emotion To'
                id='emotion_to'
                className='form__input'
                onChange={onChangeInput}
                value={state.emotion_to}
                name='emotion_to'
            />


            {/* sourching_methods */}
            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Sourcing Methods</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.sourching_methods.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'sourching_methods')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openSourcingMethods}
                    onClickAddButton={handleClickSourcingMethods}
                    anchorEl={anchorElSourcingMethods}
                    handleClose={handleCloseSourcingMethods}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='sourching_methods'
                />
            </div>


            {/* blends_with */}
            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Blends With</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.blends_with.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'blends_with')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openBlendsWith}
                    onClickAddButton={handleClickBlendsWith}
                    anchorEl={anchorElBlendsWith}
                    handleClose={handleCloseBlendsWith}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='blends_with'
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
}

export default OilForm