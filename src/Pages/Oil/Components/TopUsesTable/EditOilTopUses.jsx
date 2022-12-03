import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import { cup, hand, nose } from '../../../../assests';
import SolutionType from '../../../../Components/Common/SolutionType';

function EditOilTopUses() {
    const [solutionDescription, setSolutionDescription] = useState('')
    const [isCupActive, setIsCupActive] = useState(false);
    const [isHandActive, setIsHandActive] = useState(false);
    const [isNoseActive, setIsNoseActive] = useState(false);
    const [solution, setSolution] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [ailment, setAilment] = useState('')

    const handleClickCup = () => {
        setIsCupActive(currentState => !currentState);
    }

    const handleClickNose = () => {
        setIsNoseActive(currentState => !currentState);
    }

    const handleClickHand = () => {
        setIsHandActive(currentState => !currentState);
    }

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
                <h1 className='header__title'>Edit Top Uses</h1>
                <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }} onClick={updateEffectiveSolution}>Update Top Uses</Button>
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


                    <div className='solution__usesicons'>
                        <img src={cup} alt="A glass"
                            className='solution__usesicon--item'
                            onClick={handleClickCup}
                            style={isCupActive ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                        />
                        <img src={hand} alt="A hand"
                            className='solution__usesicon--item'
                            onClick={handleClickHand}
                            style={isHandActive ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                        />
                        <img src={nose} alt="A nose"
                            className='solution__usesicon--item'
                            onClick={handleClickNose}
                            style={isNoseActive ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default EditOilTopUses