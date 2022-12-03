import Button from '@mui/material/Button';
import { default as React, useReducer } from 'react';
import { ACTION_TYPE, constituntesReducer, INITIAL_STATE } from '../../../Reducers/constituntesReducer';
import ContituentsForm from './ContituentsForm';

function EditConstituentsFrom() {
    const [state, dispatch] = useReducer(constituntesReducer, INITIAL_STATE)

    const updateConstituents = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Constituent Tag</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateConstituents}
                    >
                        Update Property Tag
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <ContituentsForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>

        </section>
    )
}

export default EditConstituentsFrom