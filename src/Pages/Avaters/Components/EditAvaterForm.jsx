import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { nose } from "../../../assests";


function EditAvaterForm() {
    const [displayImage, setDisplayImage] = useState(nose);
    const [image, setImage] = useState('');

    const imageSelectHandler = (event) => {
        setImage(event.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDisplayImage(reader.result);
            }
        };
        if (event.target.files[0] && event.target.files[0].type.match("image.*")) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const updateAvatar = () => {

    }

    const onClickDeleteAvatar = () => {

    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Avater</h1>
                <div className='header__actions'>
                    <Button className='form__button' 
                        variant='contained' 
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateAvatar}
                    >
                        Update Avater
                    </Button>
                </div>
            </div>
            <div className='form__container'>
                <div className='img__container'>
                    <div className='img__box'>
                        <img src={displayImage} className='avater__img' alt="product" />
                    </div>
                    <Button startIcon={<DeleteForeverIcon />}
                        className='form__button'
                        sx={{ borderRadius: '5rem', width: 'fit-content' }}
                        onClick={onClickDeleteAvatar}
                    >
                        <b>Delete</b>
                    </Button>
                </div>

                <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                    imageSelectHandler(e);
                }} />
            </div>
        </section>
    )
}

export default EditAvaterForm