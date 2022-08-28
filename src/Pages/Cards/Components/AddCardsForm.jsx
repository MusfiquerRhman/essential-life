import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useState } from 'react';
import CardForm from './CardForm';

function AddCardsForm() {
    const [isActive, setIsActive] = useState(true)
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescriptionp] = React.useState('');
    const [legacyURL, setLegacyURL] = React.useState('');
    const [url, setURL] = React.useState('');
    const [buttonText, setButtonText] = useState('');
    const [textStyle, setTextStyle] = useState('');
    const [overlayStyle, setOverlayStyle] = useState('');
    const [contentVerticaleAlingment, setContentVerticaleAlingment] = useState('');
    const [contentHorizontalAlingment, setcontentHorizontalAlingment] = useState('');
    const [showForIOS, setShowForIOS] = useState(true);
    const [showForAndroid, setShowForAndroid] = useState(true);
    const [regionsVisible, setRegionsVisible] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState('')

    return (
        <section>
            <h1>New Card</h1>
            <div className='form__container'>
                <CardForm />

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Ailment</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddCardsForm