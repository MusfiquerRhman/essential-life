import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { default as React, useEffect, useState } from 'react';
import IOSSwitch from '../../../Styles/iOSSwitch';


function UserForm(props) {
    const [confrimePassword, setConfrimePassword] = useState('');
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [value, setValue] = React.useState(new Date());
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;



    useEffect(() => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: 'customExpireDate',
                value: value
            }
        })
    }, [value])


    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const onChangeInput = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }

    const handleChangeCheck = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.checked
            }
        })
    };

    const handleChangeConfrimPassword = (e) => {
        setConfrimePassword(e.target.value);
    }

    useEffect(() => {
        if (state.password !== confrimePassword) {
            setPasswordMatched(false);
        }
        else {
            setPasswordMatched(true);
        }

    }, [confrimePassword, state.password])

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
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text"
                placeholder='Name'
                id='name'
                className='form__input'
                onChange={onChangeInput}
                value={state.name}
                name='name'
            />

            <label htmlFor="bio"
                className='form__label'
                style={{ marginTop: '1rem' }}
            >
                Bio
            </label>
            <textarea type="text"
                placeholder='Bio'
                id='bio'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.bio}
                name='bio'
            />

            <label htmlFor="email" className='form__label'>Email</label>
            <input type="email"
                placeholder='Email'
                id='email'
                className='form__input'
                onChange={onChangeInput}
                value={state.email}
                name='email'
            />

            <label htmlFor="password" className='form__label'>Password</label>
            <input type="password"
                placeholder='Password'
                id='password'
                className='form__input'
                onChange={onChangeInput}
                value={state.password}
                name='password'
            />

            <label htmlFor="confrim" className='form__label'>Confrim Password</label>
            <input type="password"
                placeholder='Confrim Password'
                id='confrim'
                className='form__input'
                onChange={handleChangeConfrimPassword}
                value={confrimePassword}
                name='confrim'
            />
            {!passwordMatched &&
                <p className='light__text' style={{ color: '#E74444' }}>Password not matched</p>
            }

            <div className='switch__box flex__row' style={{ marginTop: '1.5rem' }}>
                <span>Override Subscription Expire</span>
                <FormControlLabel
                    control={
                        <IOSSwitch sx={{ m: 1 }}
                            onChange={handleChangeCheck}
                            name="overrideSubscriptionExpire"
                            checked={state.overrideSubscriptionExpire}
                        />
                    }
                />
            </div>


            <label htmlFor="type"
                className='form__label'
                style={{ marginTop: '2rem' }}
            >
                Custom Subscription Expiry Date
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label=""
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                />
            </LocalizationProvider>
            <p className='light__text'>Time Zone - {timeZone}</p>



            <label htmlFor="type" className='form__label' style={{ marginTop: '2rem' }}>Avatar ID</label>
            <select name="avaterId"
                id="type"
                className='full__length form__select'
                onChange={onChangeInput}
                value={state.avaterId}
            >
                <option disabled value="">Choose an option</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>

            <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem' }}>Custom Avatar</label>
            <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                imageSelectHandeler(e);
            }} />

            <label htmlFor="note"
                className='form__label'
                style={{ marginTop: '2rem' }}
            >
                Note
            </label>
            <textarea type="text"
                placeholder='Note'
                id='note'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.note}
                name='note'
            />

            <div className='switch__box flex__row' style={{ marginTop: '1.5rem' }}>
                <span>Is Admin</span>
                <FormControlLabel
                    control={
                        <IOSSwitch sx={{ m: 1 }}
                            onChange={handleChangeCheck}
                            name="isAdmin"
                            checked={state.isAdmin}
                        />
                    }
                />
            </div>
            <p className='light__text'> Being an admin enables the user to log into the CMS.</p>
        </>
    )
}

export default UserForm