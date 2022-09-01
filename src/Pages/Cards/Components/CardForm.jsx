import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as React } from 'react';
import IOSSwitch from '../../../Styles/iOSSwitch';


function CardForm(props) {

    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;


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
                <Button onClick={() => handleChangeRegion("Australia")}
                    variant={state.regionsVisible.indexOf('Australia') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Australia
                </Button>
                <Button onClick={() => handleChangeRegion("Canada")}
                    variant={state.regionsVisible.indexOf('Canada') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Canada
                </Button>
                <Button onClick={() => handleChangeRegion("China")}
                    variant={state.regionsVisible.indexOf('China') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    China
                </Button>
                <Button onClick={() => handleChangeRegion("Costa Rica")}
                    variant={state.regionsVisible.indexOf('Costa Rica') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Costa Rica
                </Button>
                <Button onClick={() => handleChangeRegion("EU")}
                    variant={state.regionsVisible.indexOf('EU') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    EU
                </Button>
                <Button onClick={() => handleChangeRegion("Guatemala")}
                    variant={state.regionsVisible.indexOf('Guatemala') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Guatemala
                </Button>
                <Button onClick={() => handleChangeRegion("Hong Kong")}
                    variant={state.regionsVisible.indexOf('Hong Kong') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Hong Kong
                </Button>
                <Button onClick={() => handleChangeRegion("Japan")}
                    variant={state.regionsVisible.indexOf('Japan') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Japan
                </Button>
                <Button onClick={() => handleChangeRegion("Korea")}
                    variant={state.regionsVisible.indexOf('Korea') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Korea
                </Button>
                <Button onClick={() => handleChangeRegion("Malaysia")}
                    variant={state.regionsVisible.indexOf('Malaysia') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Malaysia
                </Button>
                <Button onClick={() => handleChangeRegion("Mexico")}
                    variant={state.regionsVisible.indexOf('Mexico') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Mexico
                </Button>
                <Button onClick={() => handleChangeRegion("New Zealand")}
                    variant={state.regionsVisible.indexOf('New Zealand') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    New Zealand
                </Button>
                <Button onClick={() => handleChangeRegion("Singapore")}
                    variant={state.regionsVisible.indexOf('Singapore') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Singapore
                </Button>
                <Button onClick={() => handleChangeRegion("Taiwan")}
                    variant={state.regionsVisible.indexOf('Taiwan') === -1 ? 'text' : 'contained'}
                    sx={{marginRight: '1rem'}}
                >
                    Taiwan
                </Button>
                <Button onClick={() => handleChangeRegion("US")}
                    variant={state.regionsVisible.indexOf('US') === -1 ? 'text' : 'contained'}
                >
                    US
                </Button>
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
                imageSelectHandeler(e);
            }} />
            <p className='light__text'>The background image fills the background of the card</p>


            <label className='headerImg' htmlFor="myfile" style={{marginTop: '2rem'}}>Header Image</label>
            <input name='headerImg' className='file__input' type="file" id="headerImg" onChange={(e) => {
                imageSelectHandeler(e);
            }} />
            <p className='light__text'>The header image appears above the card text content.</p>
        </>
    )
}


export default CardForm