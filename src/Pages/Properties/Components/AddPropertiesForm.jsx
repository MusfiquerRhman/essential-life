import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer } from 'react';
import { ACTION_TYPE, INITIAL_STATE, propertiesReducer } from '../../../Reducers/propertiesReducer';
import PropertiesForm from './PropertiesForm';

function AddPropertiesForm() {
    const [state, dispatch] = useReducer(propertiesReducer, INITIAL_STATE)

    const handleClickCreate = () => {
        console.log(state)
    }

    return (
        <section>
            <h1>New Property Tag</h1>
            <div className='form__container'>
                <PropertiesForm
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
                        Create Property Tag
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

export default AddPropertiesForm