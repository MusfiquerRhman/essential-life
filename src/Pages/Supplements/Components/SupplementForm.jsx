import FormControlLabel from '@mui/material/FormControlLabel';
import { default as React, useState } from 'react';
import IOSSwitch from '../../../Styles/iOSSwitch';

const SupplementForm = React.memo((props) => {
    const { state, dispatch, ACTION_TYPE } = props;

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
                    control={
                        <IOSSwitch sx={{ m: 1 }}
                            onChange={handleChangeCheck}
                            name="make_featured"
                            checked={state.make_featured}
                        />
                    }
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

            <label htmlFor="research"
                className='form__label'
                style={{ marginTop: '1rem' }}
            >
                Research
            </label>
            <textarea type="text"
                placeholder='research'
                id='research'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.research}
                name='research'
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

export default SupplementForm;