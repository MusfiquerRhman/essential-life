import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as React } from 'react';
import IOSSwitch from '../../../Styles/iOSSwitch';

const RegionButton = (props) => {
    const {handleChangeRegion, state, country} = props;
    return (
        <Button onClick={() => handleChangeRegion()}
            variant={state.regionsVisible.indexOf(country) === -1 ? 'text' : 'contained'}
            sx={{marginRight: '1rem', marginBottom: '0.5rem'}}
        >
            {country}
        </Button>
    )
}

const CardForm = React.memo((props) => {
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

    const handleChangeRegion = (name) => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_REGION,
            payload: {
                region: name
            }
        })
    }

    const imageSelectHandler = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.files
            }
        })
    };

    return (
        <React.Fragment>
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
                Enter any web URL. Or enter an email address (this will open the default mail client in the app): 
                mailto:email@example.com Or use one of the following internal URLs: <br></br>

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
                Specific resource: essentiallife://resource/&#123;resource&#125;/&#123;id - or - uuid - of - resource&#125; 
                Note: you can get the URL for a resource from the details view.<br></br>
            </p>

            <label htmlFor="buttonText" className='form__label' style={{ marginTop: '2rem' }}>Button Text</label>
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
            <p className='light__text'>The color of the title, subtitle and description text.</p>
            <p className='light__text'></p>

            <label htmlFor="overlayStyle" className='form__label' style={{ marginTop: '2rem' }}>Overlay Style</label>
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
            <p className='light__text'>The color of the image overlay. You can use this to lighten/darken the background image to make the text more visible.</p>

            <label htmlFor="contentVerticaleAlingment"
                className='form__label'
                style={{ marginTop: '2rem' }}
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
            <p className='light__text'>The vertical alignment of the text in the card.</p>

            <label htmlFor="contentHorizontalAlingment"
                className='form__label'
                style={{ marginTop: '2rem' }}
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
            <p className='light__text'>The horizontal alignment of the text in the card.</p>

            <div className='switch__box flex__row' style={{ marginTop: '2rem' }}>
                <span>Show for iOS</span>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                        onChange={handleChangeCheck}
                        name="showForIOS"
                        checked={state.showForIOS}
                    />}
                />
            </div>
            <p className='light__text'>Toggle the visibility of the card for iOS.</p>

            <div className='switch__box flex__row' style={{ marginTop: '2rem' }}>
                <span>Show for Android</span>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                        onChange={handleChangeCheck}
                        name="showForAndroid"
                        checked={state.showForAndroid}
                    />}
                />
            </div>
            <p className='light__text'>Toggle the visibility of the card for Android.</p>

            <label htmlFor="Visibility" className='form__label' style={{ marginTop: '2rem' }}>Region Visibility</label>
            <div className='switch__box'>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Australia")} state={state} country='Australia'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Canada")} state={state} country='Canada'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("China")} state={state} country='China'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Costa Rica")} state={state} country='Costa Rica'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("EU")} state={state} country='EU'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Guatemala")} state={state} country='Guatemala'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Hong Kong")} state={state} country='Hong Kong'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Japan")} state={state} country='Japan'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Korea")} state={state} country='Korea'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Malaysia")} state={state} country='Malaysia'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Mexico")} state={state} country='Mexico'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("New Zealand")} state={state} country='New Zealand'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Singapore")} state={state} country='Singapore'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("Taiwan")} state={state} country='Taiwan'/>
                <RegionButton handleChangeRegion={() => handleChangeRegion("US")} state={state} country='US'/>
            </div>
            <p className='light__text'>Toggle the visibility of the card for different regions. The card is visible for regions in green.</p>

            <label htmlFor="backgroundColor" className='form__label' style={{ marginTop: '2rem' }}>Background Color</label>
            <input type="text"
                placeholder='Background Color'
                id='backgroundColor'
                className='form__input'
                onChange={onChangeInput}
                value={state.backgroundColor}
                name='backgroundColor'
            />
            <p className='light__text'>Use this to give the card a solid background color to the card instead of an image. Enter a hex color code.</p>

            <label className='form__label' htmlFor="backgroundImg" style={{marginTop: '2rem'}}>Background Image</label>
            <input name='backgroundImg' className='file__input' type="file" id="backgroundImg" onChange={(e) => {
                imageSelectHandler(e);
            }} />
            <p className='light__text'>The background image fills the background of the card</p>


            <label className='headerImg' htmlFor="myfile" style={{marginTop: '2rem'}}>Header Image</label>
            <input name='headerImg' className='file__input' type="file" id="headerImg" onChange={(e) => {
                imageSelectHandler(e);
            }} />
            <p className='light__text'>The header image appears above the card text content.</p>
        </React.Fragment>
    )
})


export default CardForm