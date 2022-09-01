import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import SolutionType from '../../../../Components/Common/SolutionType';

function EditBodySystemSolution() {
    const [solutionDescription, setSolutionDescription] = useState('')
    const [solution, setSolution] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [ailment, setAilment] = useState('')

    const onChangeSolutionDescription = (e) => {
        setSolutionDescription(e.targer.value)
    }

    const updateEffectiveSolution = () => {
        // TODO
    }

    const onChangeAilment = (e) => {
        setAilment(e.targer.value)
    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Oil/Blend/Supplement Solution</h1>
                <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }} onClick={updateEffectiveSolution}>Update Solution</Button>
            </div>

            <div className='form__container'>
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

                    <div className='solution__form--item'>
                        <label htmlFor="Description" className='form__label'>Description</label>
                        <textarea type="text"
                            placeholder='Description'
                            id='#Description'
                            className='form__input full__length'
                            rows="10"
                            value={solutionDescription}
                            onChange={onChangeSolutionDescription}
                            style={{marginBottom: '1rem'}}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default EditBodySystemSolution