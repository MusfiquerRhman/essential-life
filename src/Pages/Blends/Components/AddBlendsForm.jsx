import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer } from 'react';
import { ACTION_TYPE, blendReducer, INITIAL_STATE } from '../../../Reducers/blendReducer';
import BlendsForm from './BlendsForm';

function AddBlendsForm() {
    const [state, dispatch] = useReducer(blendReducer, INITIAL_STATE)

    const handleClickCreate = () => {
        console.log(state)
    }

    return (
        <section>
            <h1>New Blends</h1>
            <div className='form__container'>
                <BlendsForm
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
                        Create Blends
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

export default AddBlendsForm