import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import SymptomsForm from './SymptomsForm';

function AddSymptomsForm() {
    const [name, setName] = useState('')
    const [type, setType] = useState('symptom');
    const [description, setDescription] = useState('');
    const [bodySystemChip, setBodySystemChip] = React.useState([]);
    const [relatedBodySystemChip, setRelatedBodySystemChip] = React.useState([]);
    const [ailments, setAilments] = React.useState([]);

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

    const handleChangeAilments = (value) => {
        let exist = ailments.indexOf(value);

        if (exist === -1) {
            setAilments(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteAilments = (selectedName) => {
        setAilments(previousChips => previousChips.filter(name => name !== selectedName))
    };

    return (
        <section>
            <h1>New Ailment</h1>
            <div className='form__container'>
                <SymptomsForm
                    bodySystemChip={bodySystemChip}
                    handleChangeBodySystem={handleChangeBodySystem}
                    handleDeleteBodySystem={handleDeleteBodySystem}
                    relatedBodySystemChip={relatedBodySystemChip}
                    handleDeleteRelatedBodySystem={handleDeleteRelatedBodySystem}
                    handleChangeRelatedBodySystem={handleChangeRelatedBodySystem}
                    handleDeleteAilments={handleDeleteAilments}
                    handleChangeAilments={handleChangeAilments}
                    ailments={ailments}
                    setName={setName}
                    name={name}
                    type={type}
                    setType={setType}
                    description={description}
                    setDescription={setDescription}
                />

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Symptoms</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddSymptomsForm