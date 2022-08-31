import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import SolutionType from '../../../../Components/Common/SolutionType';

function EditOilFoundIn() {
    const [solution, setSolution] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [ailment, setAilment] = useState('')


    const updateSupportiveSolution = () => {
        // TODO
    }

    const onChangeAilment = (e) => {
        setAilment(e.targer.value)
    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Found In</h1>
                <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }} onClick={updateSupportiveSolution}>Update Found In</Button>
            </div>

            <div className='form__container'>
                <div className='solutions__form'>
                    <div className='solution__form--item'>
                        <label htmlFor="blend" className='form__label'>Ailment</label>
                        <select name="blend" id="type" className='full__length form__select' onChange={onChangeAilment} value={ailment} style={{marginBottom: '1rem'}}>
                            <option disabled value="">Choose a Ailment</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                    
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
                </div>
            </div>
        </section>
    )
}

export default EditOilFoundIn