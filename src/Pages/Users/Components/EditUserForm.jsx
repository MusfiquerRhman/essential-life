import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import FavoutriteType from '../../../Components/Common/FavouriteType';
import { favouriteTypeReducer, FAVOURITE_ACTION_TYPE, FAVOURITE_INITIAL_STATE } from '../../../Reducers/favouriteTypeReducer';
import { ACTION_TYPE, INITIAL_STATE, userReducer } from '../../../Reducers/userReducer';
import FavouriteTable from './Favourites/FavouriteTable';
import UserForm from './UserForm';

function EditUserForm() {
    const [userState, userDispatch] = useReducer(userReducer, INITIAL_STATE)
    const [favouriteState, favuriteDispatch] = useReducer(favouriteTypeReducer, FAVOURITE_INITIAL_STATE)
    const [action, setAction] = useState('');


    const handleClickCreate = () => {
        console.log(userState)
    }

    const updateuser = () => {
        // TODO
    }

    const handleClickExecuteAction = () => {
        // TODO
    }

    const createFavourite = () => {
        console.log({
            'type': favouriteState.type,
            'item': favouriteState[favouriteState.type]
        })
    }

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const [selectedFavourite, setSelectedFavourite] = useState([]);

    const handleSelectDeleteAllFavourites = () => {
        // TODO: Delete all selected
    }



    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit User</h1>

                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }} onClick={updateuser}>Update User</Button>

                    <select name="Days" id="days" defaultValue={action} onChange={handleChangeAction}>
                        <option disabled value="">Select an Action</option>
                        <option value="7">Override subscription expiry (7 days)</option>
                        <option value="14">Override subscription expiry (14 days)</option>
                        <option value="30">Override subscription expiry (30 days)</option>
                        <option value="0">Disable Subscription Override</option>
                    </select>

                    <Button
                        id="action-button"
                        aria-haspopup="true"
                        onClick={handleClickExecuteAction}
                        variant='contained'
                        sx={{
                            padding: '0.5rem',
                            borderRadius: '2rem',
                            marginLeft: '1rem'
                        }}
                        disabled={action === '' ? true : false}
                    >
                        <DoneIcon />
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <UserForm
                    state={userState}
                    dispatch={userDispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>

            <div className='solutions__container'>
                <h1 className='header__title'>Favourites</h1>
                <div className='solutions__form'
                    style={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <div className='supportive__container'>
                        <FavoutriteType
                            state={favouriteState}
                            dispatch={favuriteDispatch}
                            ACTION_TYPE={FAVOURITE_ACTION_TYPE}
                        />
                    </div>

                    <Button sx={{ borderRadius: '2rem' }}
                        variant="contained"
                        className='bottom__button'
                        onClick={createFavourite}
                    >
                        Create Favourite
                    </Button>
                </div>
            </div>

            <div className='table__card'>
                <FavouriteTable
                    setSelectedFavourite={setSelectedFavourite}
                    handleSelectDeleteAllFavourites={handleSelectDeleteAllFavourites}
                />
            </div>

            <h1 style={{marginTop: '5rem'}}>Debug Info</h1>
            <div className='debug__info'>
                <p>
                    Last logged in: 2022-08-30 03:42:22 (19 hours ago)<br></br>
                    <br></br>
                    Last used app: 2022-08-30 03:47:47 (18 hours ago)<br></br>
                    <br></br>
                    Subscription override: No<br></br>
                    <br></br>
                    Subscription type: Trial<br></br>
                    <br></br>
                    Subscription expires: 2022-09-06 05:41:13 (in 6 days)<br></br>
                    <br></br>
                    Platform: Android<br></br>
                    <br></br>
                    App version: 2.16<br></br>
                    <br></br>
                    App build number: 65<br></br>
                    <br></br>
                    Device name: samsung-SM-G973U<br></br>
                    <br></br>
                    Device system version: Android%20API%2031<br></br>
                    <br></br>
                    FCM token: cy7VCzb-SkWEzkX585yIcm:APA91bHv6nw17qLmaXCNFWVL7-FstwIiYr1I2aUkJwEyeN6B-xAJwWMFVQw0yP9SHVquAv9gj59uF5ini1500HMDz2mVebOlBmsZTNva7DgBBvg_8WmrNEyjjK4AuB3OAeUHqehb2SkO
                </p>
            </div>
        </section>
    )
}

export default EditUserForm