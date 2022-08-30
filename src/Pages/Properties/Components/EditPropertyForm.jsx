import Button from '@mui/material/Button';
import React, { useReducer, useState } from 'react';
import { ACTION_TYPE, INITIAL_STATE, propertiesReducer } from '../../../Reducers/propertiesReducer';
import PropertiesForm from './PropertiesForm';

function EditPropertyForm() {
    const [state, dispatch] = useReducer(propertiesReducer, INITIAL_STATE)

    const updateProperty = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Property Tag</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateProperty}
                    >
                        Update Property Tag
                    </Button>
                </div>
            </div>
            <div className='form__container'>
                <PropertiesForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>
        </section>
    )
}

export default EditPropertyForm