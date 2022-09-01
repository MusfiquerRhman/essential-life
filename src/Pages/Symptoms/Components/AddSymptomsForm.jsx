import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer } from 'react';
import { ACTION_TYPE, INITIAL_STATE, symptomsReducer } from '../../../Reducers/symptomsReducer';
import SymptomsForm from './SymptomsForm';

function AddSymptomsForm() {
    const [state, dispatch] = useReducer(symptomsReducer, INITIAL_STATE)

    return (
        <section>
            <h1>New Symptoms</h1>
            <div className='form__container'>
                <SymptomsForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />

                <div className='form__actions'>
                    <Button className='form__button' 
                        startIcon={<AddIcon />} 
                        variant='contained' 
                        sx={{ borderRadius: '5rem' }}
                    >
                        Create Symptoms
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

export default AddSymptomsForm