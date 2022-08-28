import FormControlLabel from '@mui/material/FormControlLabel';
import { default as React, useReducer, useState } from 'react';
import { ACTION_TYPE, cardReducer, INITIAL_STATE } from '../../../Reducer/cardReducer';
import IOSSwitch from '../../../Styles/iOSSwitch';



function CardForm(props) {
    const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE)

    const handleChangeCheck = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_SWITCH,
            payload: {
                name: event.target.name,
                checked: event.target.checked
            }
        }
        )
    };

    const onChangeInput = (event) => [
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    ]

    console.log(state)

    return (
        <>

            <div className='switch__box flex__row'>
                <span>Active</span>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                        onChange={handleChangeCheck}
                        name="isActive"
                        checked={state.isActive}
                    />}
                />
            </div>
            <p className='light__text'>Only active cards will show on the dashboard.</p>
            <label htmlFor="title" className='form__label' style={{ marginTop: '1rem' }}>Title</label>
            <textarea type="text"
                placeholder='Title'
                id='title'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.title}
                name='title'
            />

            <label htmlFor="subtitle" className='form__label'>Subtitle</label>
            <input type="text"
                placeholder='Subtitle'
                id='subtitle'
                className='form__input'
                onChange={onChangeInput}
                value={state.subtitle}
                name='subtitle'
            />

            <label htmlFor="description" 
                className='form__label' 
                style={{ marginTop: '1rem' }}
            >
                Description
            </label>
            <textarea type="text"
                placeholder='Description'
                id='description'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.description}
                name='description'
            />

            <label htmlFor="legacyURL" 
                className='form__label'
            >
                Legacy URL (deprecated - use the URL field below instead)
            </label>
            <input type="text"
                placeholder='Legacy URL'
                id='legacyURL'
                className='form__input'
                onChange={onChangeInput}
                value={state.legacyURL}
                name='legacyURL'
            />

            <label htmlFor="url" className='form__label'>URL</label>
            <input type="text"
                placeholder='URL'
                id='url'
                className='form__input'
                onChange={onChangeInput}
                value={state.url}
                name='url'
            />

            <p className='light__text'>
                Enter any web URL. Or enter an email address (this will open the default mail client in the app): mailto:email@example.com Or use one of the following internal URLs: <br></br>

                Profile: essentiallife://profile<br></br>
                Favourites tab in profile: essentiallife://favorites<br></br>
                User generated content tab in profile: essentiallife://ugc<br></br>
                <br></br>
                How to guide: essentiallife://popup/how-to-use<br></br>
                Tip: essentiallife://popup/tips<br></br>
                Contact: essentiallife://popup/contact<br></br>
                Share: essentiallife://popup/share<br></br>
                <br></br>
                Oils index: essentiallife://resource/Oil<br></br>
                Blends index: essentiallife://resource/Blend<br></br>
                Supplements index: essentiallife://resource/Supplement<br></br>
                Body Systems index: essentiallife://resource/BodySystem<br></br>
                Recipe index: essentiallife://resource/Recipe<br></br>
                Remedies index: essentiallife://resource/Remedy<br></br>
                Ailments index: essentiallife://resource/Ailment<br></br>
                Symptoms index: essentiallife://resource/Symptom<br></br>
                <br></br>
                Specific resource: essentiallife://resource/&#123;resource&#125;/&#123;id - or - uuid - of - resource&#125; Note: you can get the URL for a resource from the details view.<br></br>
            </p>

            <label htmlFor="buttonText" className='form__label'>Button Text</label>
            <input type="text"
                placeholder='Button Text'
                id='buttonText'
                className='form__input'
                onChange={onChangeInput}
                value={state.buttonText}
                name='buttonText'
            />

            <label htmlFor="type" className='form__label'>Text Style</label>
            <select name="textStyle" 
                id="type" 
                className='full__length form__select' 
                onChange={onChangeInput} 
                value={state.textStyle}
            >
                <option disabled value="">Choose an option</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <label htmlFor="overlayStyle" className='form__label' style={{ marginTop: '1rem' }}>Overlay Style</label>
            <select name="overlayStyle" 
                id="overlayStyle" 
                className='full__length form__select' 
                onChange={onChangeInput} 
                value={state.overlayStyle}
            >
                <option disabled value="">Choose an option</option>
                <option value="none">none</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <label htmlFor="contentVerticaleAlingment" 
                className='form__label' 
                style={{ marginTop: '1rem' }}
            >
                Content Vertical Alignment
            </label>
            <select name="contentVerticaleAlingment" 
                id="contentVerticaleAlingment" 
                className='full__length form__select' 
                onChange={onChangeInput} 
                value={state.contentVerticaleAlingment}
            >
                <option disabled value="">Choose an option</option>
                <option value="Top">Top</option>
                <option value="Center">Center</option>
                <option value="Bottom">Bottom</option>
            </select>

            <label htmlFor="contentHorizontalAlingment" 
                className='form__label' 
                style={{ marginTop: '1rem' }}
            >
                Content Horizontal Alignment
            </label>
            <select name="contentHorizontalAlingment" 
                id="contentHorizontalAlingment" 
                className='full__length form__select' 
                onChange={onChangeInput} 
                value={state.contentHorizontalAlingment}
            >
                <option disabled value="">Choose an option</option>
                <option value="Top">Top</option>
                <option value="Center">Center</option>
                <option value="Bottom">Bottom</option>
            </select>

            <div className='switch__box flex__row' style={{ marginTop: '1rem' }}>
                <span>Show for iOS</span>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                        onChange={handleChangeCheck}
                        name="showForIOS"
                        checked={state.showForIOS}
                    />}
                />
            </div>

            <div className='switch__box flex__row' style={{ marginTop: '1rem' }}>
                <span>Show for Android</span>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                        onChange={handleChangeCheck}
                        name="showForAndroid"
                        checked={state.showForAndroid}
                    />}
                />
            </div>
            
            
        </>
    )
}

export default CardForm