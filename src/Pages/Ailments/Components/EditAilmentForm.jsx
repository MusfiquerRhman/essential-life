import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import AilmentForm from './AilmentForm';


function EditAilmentForm() {
    const [action, setAction] = useState('')

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {

    }

    const [name, setName] = useState('');
    const [type, setType] = useState('ailment');
    const [description, setDescription] = useState('');
    const [bodySystemChip, setBodySystemChip] = useState([]);
    const [relatedBodySystemChip, setRelatedBodySystemChip] = useState([]);
    const [symptoms, setSymptoms] = useState([]);

    const handleChangeRelatedBodySystem = (value) => {
        let exist = relatedBodySystemChip.indexOf(value);

        if (exist === -1) {
            setRelatedBodySystemChip(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteRelatedBodySystem = (selectedName) => {
        setRelatedBodySystemChip(previousChips => previousChips.filter(name => name !== selectedName))
    };

    const handleChangeBodySystem = (value) => {
        let exist = bodySystemChip.indexOf(value);

        if (exist === -1) {
            setBodySystemChip(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteBodySystem = (selectedName) => {
        setBodySystemChip(previousChips => previousChips.filter(name => name !== selectedName))
    };

    const handleChangeSymptoms = (value) => {
        let exist = symptoms.indexOf(value);

        if (exist === -1) {
            setSymptoms(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteSymptoms = (selectedName) => {
        setSymptoms(previousChips => previousChips.filter(name => name !== selectedName))
    };


    const [solution, setSolution] = useState('')

    const onChangeSolution = (e) => {
        setSolution(e.target.value);
    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Ailment</h1>

                <div className='header__actions'>
                    <Button className='form__button' variant='contained' sx={{ borderRadius: '5rem' }}>Update Ailment</Button>

                    <select name="Days" id="days" defaultValue={action} onChange={handleChangeAction}>
                        <option disabled value="">Select an Action</option>
                        <option value="approve">Approve</option>
                        <option value="rejected">Rejected</option>
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
                    <div className='solution__form--item'>
                        <label htmlFor="Solution" className='form__label'>Solution</label>
                        <input type="text" placeholder='Solution' id='#Solution' className='form__input' onChange={onChangeSolution} value={solution}/>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default EditAilmentForm