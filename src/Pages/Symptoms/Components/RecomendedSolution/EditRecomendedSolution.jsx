import Button from '@mui/material/Button';
import React, { useState } from 'react';
import SolutionType from '../../../../Components/Common/SolutionType';

function EditRecomendedSolutionSymptoms() {
    const [solution, setSolution] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [ailment, setAilment] = useState('')

    const updateRecomendedSolutions = () => {
        
    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Recommended Solutions</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateRecomendedSolutions}
                    >
                        Update Recommended Solutions
                    </Button>
                </div>
            </div>

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
            </div>
        </section>
    )
}

export default EditRecomendedSolutionSymptoms