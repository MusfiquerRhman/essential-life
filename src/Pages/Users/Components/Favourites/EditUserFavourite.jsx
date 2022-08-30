import Button from '@mui/material/Button';
import React, { useReducer, useState } from 'react';
import FavoutriteType from '../../../../Components/Common/FavouriteType';
import { favouriteTypeReducer, FAVOURITE_ACTION_TYPE, FAVOURITE_INITIAL_STATE } from '../../../../Reducers/favouriteTypeReducer';

function EditUserFavourite() {
    const [state, dispatch] = useReducer(favouriteTypeReducer, FAVOURITE_INITIAL_STATE)
    const [user, setuser] = useState('');

    const onChangeUser = (e) => {
        setuser(e.target.value);
    }

    const updatefavourites = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit User Favourites</h1>
                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }}>Update Remedy</Button>
                </div>
            </div>

            <div className='form__container'>
                <label htmlFor="type" className='form__label'>Select User</label>
                <select name="avaterId"
                    id="type"
                    className='full__length form__select'
                    onChange={onChangeUser}
                    value={user}
                >
                    <option disabled value="">Choose an option</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                <div className='supportive__container'  style={{ marginTop: '2rem' }}>
                    <FavoutriteType
                        state={state}
                        dispatch={dispatch}
                        ACTION_TYPE={FAVOURITE_ACTION_TYPE}
                    />
                </div>
            </div>
        </section>
    )
}

export default EditUserFavourite