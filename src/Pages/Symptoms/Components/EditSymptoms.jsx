import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import SolutionType from '../../../Components/Common/SolutionType';
import { ACTION_TYPE, INITIAL_STATE, symptomsReducer } from '../../../Reducers/symptomsReducer';
import RecomendedSolutionTable from "./RecomendedSolution/RecomendedSolutionTable";
import SymptomsForm from './SymptomsForm';

function EditSymptoms() {
    const [state, dispatch] = useReducer(symptomsReducer, INITIAL_STATE)
    const [action, setAction] = useState('');
    const [solution, setSolution] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [ailment, setAilment] = useState('')


    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }

    const updateSymptoms = () => {

    }

    const createRecomendedSolution = () => {

    }

    const [selectedRecomendedSolution, setRecomendedSolutionSelectedArray] = useState([]);

    // useEffect(() => {
    //   console.log(selected, contentStatus, action)

    // }, [selected, contentStatus, action])

    const handleSelectDeleteRecomendedeSolution = () => {
        // TODO: Delete all selected
    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Symptoms</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateSymptoms}
                    >
                        Update Symptoms
                    </Button>

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
                <SymptomsForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Recommended Solutions</h1>
            <div className='form__container' >
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

                <label htmlFor="type" className='form__label'>Ailment</label>
                <select name="Days" id="type" className='full__length form__select' onChange={e => setAilment(e.target.value)} value={ailment}>
                    <option disabled value="">Choose an option</option>
                    <option value="ailment">Ailment</option>
                    <option value="symptom">Symptom</option>
                </select>


                <div className='solution__box' style={{marginLeft: 'auto'}}>
                    <Button sx={{ borderRadius: '2rem', width:'fit-content' }} 
                        variant="contained" 
                        className='bottom__button'
                        onClick={createRecomendedSolution}
                        startIcon={<AddIcon />}
                    >
                        Create Recommended Solutions
                    </Button>
                </div>
            </div>

            <div className='table__card'>
                <RecomendedSolutionTable
                    setSupportiveSelectedArray={setRecomendedSolutionSelectedArray}
                    handleSelectDeleteAll={handleSelectDeleteRecomendedeSolution}
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

export default EditSymptoms