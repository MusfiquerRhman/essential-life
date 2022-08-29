import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useEffect, useReducer } from 'react';
import { ACTION_TYPE, cardReducer, INITIAL_STATE } from '../../../Reducers/cardReducer';
import CardForm from './CardForm';

function AddCardsForm() {
    const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE)

    return (
        <section>
            <h1>New Card</h1>
            <div className='form__container'>
                <CardForm 
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
                        Create card
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

export default AddCardsForm