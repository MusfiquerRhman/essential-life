import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import { ACTION_TYPE, cardReducer, INITIAL_STATE } from '../../../Reducers/cardReducer';
import CardForm from './CardForm';

const EditCardsForm = () => {
    const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE)
    const [action, setAction] = useState('');


    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }

    const updateCard = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Card</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateCard}
                    >
                        Update Card
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <CardForm 
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>
        </section>
    )
}

export default EditCardsForm;