import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import '../ailmentsStyles.scss';
import AilmentForm from './AilmentForm';

function AddAilmentsForm() {
    const [name, setName] = useState('')
    const [type, setType] = useState('ailment');
    const [description, setDescription] = useState('');
    const [bodySystemChip, setBodySystemChip] = React.useState([]);
    const [relatedBodySystemChip, setRelatedBodySystemChip] = React.useState([]);
    const [symptoms, setSymptoms] = React.useState([]);

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

    return (
        <section>
            <h1>New Ailment</h1>
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

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Recipe</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddAilmentsForm