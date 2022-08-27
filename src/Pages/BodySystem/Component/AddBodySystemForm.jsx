import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import BodySystemForm from './BodySystemForm';

function AddBodySystemForm() {
    const [name, setName] = useState('')
    const [tip, setTip] = useState('');
    const [description, setDescription] = useState('');
    const [RemediesChip, setRemediesChip] = React.useState([]);
    const [ailmentAndSymptoms, setAilmentAndSymptoms] = React.useState([]);
    const [associatedProperties, setAssociatedProperties] = React.useState([]);
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");

    const handleChangeAilmentAndSymptoms = (value) => {
        let exist = ailmentAndSymptoms.indexOf(value);

        if (exist === -1) {
            setAilmentAndSymptoms(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteAilmentAndSymptoms = (selectedName) => {
        setAilmentAndSymptoms(previousChips => previousChips.filter(name => name !== selectedName))
    };

    const handleChangeRemedyTips = (value) => {
        let exist = RemediesChip.indexOf(value);

        if (exist === -1) {
            setRemediesChip(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteRemedyTips = (selectedName) => {
        setRemediesChip(previousChips => previousChips.filter(name => name !== selectedName))
    };

    const handleChangeAssociatedProperties = (value) => {
        let exist = associatedProperties.indexOf(value);

        if (exist === -1) {
            setAssociatedProperties(oldValues => [...oldValues, value]);
        }
    };

    const handleDeleteAssociatedProperties = (selectedName) => {
        setAssociatedProperties(previousChips => previousChips.filter(name => name !== selectedName))
    };

    return (
        <section>
            <h1>New Body System</h1>
            <div className='form__container'>
                <BodySystemForm
                    RemediesChip={RemediesChip}
                    handleChangeRemedyTips={handleChangeRemedyTips}
                    handleDeleteRemedyTips={handleDeleteRemedyTips}
                    ailmentAndSymptoms={ailmentAndSymptoms}
                    handleDeleteAilmentAndSymptoms={handleDeleteAilmentAndSymptoms}
                    handleChangeAilmentAndSymptoms={handleChangeAilmentAndSymptoms}
                    handleDeleteAssociatedProperties={handleDeleteAssociatedProperties}
                    handleChangeAssociatedProperties={handleChangeAssociatedProperties}
                    associatedProperties={associatedProperties}
                    setName={setName}
                    name={name}
                    tip={tip}
                    setTip={setTip}
                    description={description}
                    setDescription={setDescription}
                    setDisplayImage={setDisplayImage}
                    setImage={setImage}
                />

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Body System</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddBodySystemForm