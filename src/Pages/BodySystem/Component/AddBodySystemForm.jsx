import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer } from 'react';
import { ACTION_TYPE, bodySystemReducer, INITIAL_STATE } from '../../../Reducers/bodySystemReducer';
import BodySystemForm from './BodySystemForm';

function AddBodySystemForm() {
    const [state, dispatch] = useReducer(bodySystemReducer, INITIAL_STATE)

    const addBodySystem = () => {
        console.log(state)
    }

    return (
        <section>
            <h1>New Body System</h1>
            <div className='form__container'>
                <BodySystemForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />

                <div className='form__actions'>
                    <Button className='form__button' 
                        startIcon={<AddIcon />} 
                        variant='contained' 
                        sx={{ borderRadius: '5rem' }}
                        onClick={addBodySystem}
                    >
                        Create Body System
                    </Button>
                    <Button className='form__button' 
                        startIcon={<AddIcon />} 
                        variant='outlined' 
                        sx={{ borderRadius: '5rem' }}
                    >
                        Create and Add another
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default AddBodySystemForm