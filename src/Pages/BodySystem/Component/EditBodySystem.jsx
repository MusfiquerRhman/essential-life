import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useCallback, useReducer, useState } from 'react';
import SolutionType from '../../../Components/Common/SolutionType';
import { ACTION_TYPE, bodySystemReducer, INITIAL_STATE } from '../../../Reducers/bodySystemReducer';
import BodySystemForm from './BodySystemForm';
import EnhancedTable from './SolutionTable/EnhancedTable';

function EditBodySystem() {
    const [state, dispatch] = useReducer(bodySystemReducer, INITIAL_STATE)
    const [action, setAction] = useState('');
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [solution, setSolution] = useState('')
    const [solutionDescription, setSolutionDescription] = useState('')
    const [selectedeSolution, setSelectedSolution] = useState([]);

    const handleSelectDeleteAllSolution = useCallback(() => {
        // TODO: Delete all selected
    }, [])


    const onChangeSolutionDescription = (e) => {
        setSolutionDescription(e.targer.value)
    }

    
    const updateBodySystem = () => {

    }

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }

    const createSolution = () => {

    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Body System</h1>

                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }} onClick={updateBodySystem}>Update Body System</Button>

                    <select name="Days" id="days" defaultValue={action} onChange={handleChangeAction}>
                        <option disabled value="">Select an Action</option>
                        <option value="force">Force Update</option>
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
                <BodySystemForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>

            <div className='solutions__container'>
                <h1 className='header__title'>Oil/Blend/Supplement Solution</h1>
                <div className='solutions__form'>
                    <SolutionType
                        setSolution={setSolution}
                        setOil={setOil}
                        setSupplement={setSupplement}
                        setBlend={setBlend}
                        oil={oil}
                        blend={blend}
                        supplement={supplement}
                        solution={solution}
                    />

                    <div className='solution__form--item-textArea'>
                        <label htmlFor="Description" className='form__label'>Description</label>
                        <textarea type="text"
                            placeholder='Description'
                            id='#Description'
                            className='form__input'
                            rows="10"
                            value={solutionDescription}
                            onChange={onChangeSolutionDescription}
                        />
                    </div>

                    <div className='solution__box'>
                        <Button sx={{ borderRadius: '2rem' }} variant="contained" className='bottom__button' onClick={createSolution}>
                            Create Effective Solution
                        </Button>
                    </div>
                </div>
            </div>

            <div className='table__card'>
                <EnhancedTable
                    setSelectedArray={setSelectedSolution}
                    handleSelectDeleteAll={handleSelectDeleteAllSolution}
                />
            </div>

            <h1 style={{marginTop: '5rem'}}>Links</h1>
            <div className='form__container'>
                <p>Internal deep link:</p>
                <p className='link'><b>essentiallife://resource/Ailment/04dfe2f8-51f1-4e60-bcf0-2da6301c2ad2</b></p>

                <p>Web sharing link:</p>
                <p className='link'><b>https://link.essentiallife.com/Ailment/04dfe2f8-51f1-4e60-bcf0-2da6301c2ad2</b></p>
            </div>
            
        </section>
    )
}

export default EditBodySystem