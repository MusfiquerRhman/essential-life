import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

const OilForm = (props) => {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const [anchorElTopProperties, setAnchorElTopProperties] = React.useState(null);
    const opentop_properties = Boolean(anchorElTopProperties);

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

    const [anchorElSourchingMethods, setAnchorElSourchingMethods] = React.useState(null);
    const openSourchingMethods = Boolean(anchorElSourchingMethods);

    const handleClickSourchingMethods = (event) => {
        setAnchorElSourchingMethods(event.currentTarget);
    };

    const handleCloseSourchingMethods = () => {
        setAnchorElSourchingMethods(null);
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

    const handleChangeAddTopProperties = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_TOP_PROPERTIES,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteTopProperties = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_TOP_PROPERTIES,
            payload: {
                value: value
            }
        })
    }

    const handleChangeAddMainConstitunts = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_MAIN_CONSTITUENTS,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteMainConstitunts = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_MAIN_CONSTITUENTS,
            payload: {
                value: value
            }
        })
    }

    const handleChangeAddSourchingMethod = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_SOURCHING_METHOD,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteSourchingMethod = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_SOURCHING_METHOD,
            payload: {
                value: value
            }
        })
    }


    const handleChangeAddBlendsWith = (value) => {
        dispatch({
            type: ACTION_TYPE.ADD_BLENDS_WITH,
            payload: {
                value: value
            }
        })
    }

    const handleDeleteBlendsWith = (value) => {
        dispatch({
            type: ACTION_TYPE.DELETE_BLENDS_WITH,
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
                            onDelete={() => handleDeleteTopProperties(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={opentop_properties ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={opentop_properties ? 'true' : undefined}
                        onClick={handleClickTopProperties}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElTopProperties}
                        open={opentop_properties}
                        onClose={handleCloseTopProperties}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddTopProperties(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>


            {/* Main Constituents */}
            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Main Constituents</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.main_constituents.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteMainConstitunts(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openMainConstituents ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMainConstituents ? 'true' : undefined}
                        onClick={handleClickMainConstituents}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElMainConstituents}
                        open={openMainConstituents}
                        onClose={handleCloseMainConstituents}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddMainConstitunts(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
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
                            onDelete={() => handleDeleteSourchingMethod(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openSourchingMethods ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openSourchingMethods ? 'true' : undefined}
                        onClick={handleClickSourchingMethods}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElSourchingMethods}
                        open={openSourchingMethods}
                        onClose={handleCloseSourchingMethods}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddSourchingMethod(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>



            {/* blends_with */}
            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Blends With</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.blends_with.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteBlendsWith(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openBlendsWith ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openBlendsWith ? 'true' : undefined}
                        onClick={handleClickBlendsWith}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElBlendsWith}
                        open={openBlendsWith}
                        onClose={handleCloseBlendsWith}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAddBlendsWith(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>

            <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem' }}>Background Image</label>
            <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                imageSelectHandeler(e);
            }} />
        </>
    )
}

export default OilForm