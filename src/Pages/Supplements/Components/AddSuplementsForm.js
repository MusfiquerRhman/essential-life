import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer } from 'react';
import { ACTION_TYPE, INITIAL_STATE, supplementsReducer } from '../../../Reducers/supplementsReducer';
import SupplementForm from './SupplementForm';


function AddSuplementsForm() {
    const [state, dispatch] = useReducer(supplementsReducer, INITIAL_STATE)

    const handleClickCreate = () => {
        console.log(state)
    }
    
    return (
        <section>
            <h1>New Supplements</h1>
            <div className='form__container'>
                <SupplementForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
                <div className='form__actions'>
                    <Button className='form__button'
                        startIcon={<AddIcon />}
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={handleClickCreate}
                    >
                        Create Supplements
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

export default AddSuplementsForm