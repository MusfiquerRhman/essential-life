import Chip from '@mui/material/Chip';
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

const BodySystemForm = React.memo((props) => {
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

    const handleClickRemedy = useCallback((event) => {
        setAnchorElRemedy(event.currentTarget);
    }, []);

    const handleClickAilmentAndSymptoms = useCallback((event) => {
        setAnchorElAilmentAndSymptoms(event.currentTarget);
    }, []);

    const handleClickAssociatedProperties = useCallback((event) => {
        setAnchorElAssociatedProperties(event.currentTarget);
    }, []);

    const handleCloseRemedy = useCallback(() => {
        setAnchorElRemedy(null);
    }, []);

    const handleCloseAilmentAndSymptoms = useCallback(() => {
        setAnchorElAilmentAndSymptoms(null);
    }, []);

    const handleCloseAssociatedProperties = useCallback(() => {
        setAnchorElAssociatedProperties(null);
    }, []);

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
                    {state.remedies.map((value, index) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={index}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'remedies')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openRemedy}
                    onClickAddButton={handleClickRemedy}
                    anchorEl={anchorElRemedy}
                    handleClose={handleCloseRemedy}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='remedies'
                />
            </div>


            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Ailments &amp; Symptoms</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.ailmentAndSymptoms.map((value, index) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={index}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'ailmentAndSymptoms')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openAilmentAndSymptoms}
                    onClickAddButton={handleClickAilmentAndSymptoms}
                    anchorEl={anchorElAilmentAndSymptoms}
                    handleClose={handleCloseAilmentAndSymptoms}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='ailmentAndSymptoms'
                />
            </div>

            <label htmlFor="Systems" className='form__label'>Associated properties names</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.associatedProperties.map((value, index) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={index}
                            label={value}
                            onDelete={() => handleDeleteChips(value, 'associatedProperties')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openAssociatedProperties}
                    onClickAddButton={handleClickAssociatedProperties}
                    anchorEl={anchorElAssociatedProperties}
                    handleClose={handleCloseAssociatedProperties}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='associatedProperties'
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

export default BodySystemForm