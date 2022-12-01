import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useCallback, useState } from 'react';
import { cup, hand, nose } from '../../../assests';
import SolutionType from '../../../Components/Common/SolutionType';
import AilmentForm from './AilmentForm';
import EnhancedTable from './Solutions Table/EnhancedTable';
import SupportingEnhancedTable from "./Supporting Solution Table/SupportingEnhancedTable";

const EditAilmentForm = React.memo(() => {
    const [action, setAction] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('ailment');
    const [description, setDescription] = useState('');
    const [bodySystemChip, setBodySystemChip] = useState([]);
    const [relatedBodySystemChip, setRelatedBodySystemChip] = useState([]);
    const [symptoms, setSymptoms] = useState([]);
    const [solution, setSolution] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setBlend] = useState('')
    const [supplement, setSupplement] = useState('')
    const [solutionDescription, setSolutionDescription] = useState('')
    const [isCupActive, setIsCupActive] = useState(false);
    const [isHandActive, setIsHandActive] = useState(false);
    const [isNoseActive, setIsNoseActive] = useState(false);

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }

    const handleChangeRelatedBodySystem = useCallback((value) => {
        let exist = relatedBodySystemChip.indexOf(value);

        if (exist === -1) {
            setRelatedBodySystemChip(oldValues => [...oldValues, value]);
        }
    }, [relatedBodySystemChip]);

    const handleDeleteRelatedBodySystem = useCallback((selectedName) => {
        setRelatedBodySystemChip(previousChips => previousChips.filter(name => name !== selectedName))
    }, []);

    const handleChangeBodySystem = useCallback((value) => {
        let exist = bodySystemChip.indexOf(value);

        if (exist === -1) {
            setBodySystemChip(oldValues => [...oldValues, value]);
        }
    }, [bodySystemChip]);

    const handleDeleteBodySystem = useCallback((selectedName) => {
        setBodySystemChip(previousChips => previousChips.filter(name => name !== selectedName))
    }, []);

    const handleChangeSymptoms = useCallback((value) => {
        let exist = symptoms.indexOf(value);

        if (exist === -1) {
            setSymptoms(oldValues => [...oldValues, value]);
        }
    }, [symptoms]);

    const handleDeleteSymptoms = useCallback((selectedName) => {
        setSymptoms(previousChips => previousChips.filter(name => name !== selectedName))
    }, []);


    const onChangeSolutionDescription = (e) => {
        setSolutionDescription(e.target.value)
    }

    const handleClickCup = () => {
        setIsCupActive(currentState => !currentState);
    }

    const handleClickNose = () => {
        setIsNoseActive(currentState => !currentState);
    }

    const handleClickHand = () => {
        setIsHandActive(currentState => !currentState);
    }

    const createEffectiveSolution = () => {
        // TODO
    }

    const updateAilment = () => {
        // TODO
    }

    const [selectedEffectiveSolution, setSelectedEffectiveSolution] = useState([]);
    const [selectedSupportiveSolution, setSupportiveSelectedArray] = useState([]);

    // useEffect(() => {
    //   console.log(selected, contentStatus, action)

    // }, [selected, contentStatus, action])

    const handleSelectDeleteAllEffectiveSolution = () => {
        // TODO: Delete all selected
    }

    const handleSelectDeleteAllSupportiveSolution = () => {
        // TODO: Delete all selected
    }

    const createSupportiveSolution = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Ailment</h1>

                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }} onClick={updateAilment}>Update Ailment</Button>

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
                <AilmentForm
                    bodySystemChip={bodySystemChip}
                    handleChangeBodySystem={handleChangeBodySystem}
                    handleDeleteBodySystem={handleDeleteBodySystem}
                    relatedBodySystemChip={relatedBodySystemChip}
                    handleDeleteRelatedBodySystem={handleDeleteRelatedBodySystem}
                    handleChangeRelatedBodySystem={handleChangeRelatedBodySystem}
                    handleDeleteSymptoms={handleDeleteSymptoms}
                    handleChangeSymptoms={handleChangeSymptoms}
                    symptoms={symptoms}
                    setName={setName}
                    name={name}
                    type={type}
                    setType={setType}
                    description={description}
                    setDescription={setDescription}
                />
            </div>

            <div className='solutions__container'>
                <h1 className='header__title'>Effective Solutions</h1>
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

                        <Button sx={{ borderRadius: '2rem' }} variant="contained" className='bottom__button' onClick={createEffectiveSolution}>
                            Create Effective Solution
                        </Button>
                    </div>
                </div>
            </div>


            <div className='table__card'>
                <EnhancedTable
                    setSelectedArray={setSelectedEffectiveSolution}
                    handleSelectDeleteAll={handleSelectDeleteAllEffectiveSolution}
                />
            </div>

            <div className='solutions__container'>
                <h1 className='header__title'>Supporting Solutions</h1>
                <div className='solutions__form' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='supportive__container'>

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

                    <Button sx={{ borderRadius: '2rem' }} variant="contained" className='bottom__button' onClick={createSupportiveSolution}>
                        Create Supportive Solution
                    </Button>
                </div>
            </div>

            <div className='table__card'>
                <SupportingEnhancedTable
                    setSupportiveSelectedArray={setSupportiveSelectedArray}
                    handleSelectDeleteAll={handleSelectDeleteAllSupportiveSolution}
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
})


export default EditAilmentForm