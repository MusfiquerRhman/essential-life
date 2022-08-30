import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { nose } from "../../../assests";


function EditAvaterForm(props) {
    const [displayImage, setDisplayImage] = useState(nose);
    const [image, setImage] = useState('')

    const imageSelectHandeler = (files) => {
        setImage(files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDisplayImage(reader.result);
            }
        };
        if (files[0] && files[0].type.match("image.*")) {
            reader.readAsDataURL(files[0]);
        }
    };

    const updateAvater = () => {

    }

    const onClickDeleteAvater = () => {

    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Avater</h1>
                <div className='header__actions'>
                    <Button className='form__button' 
                        variant='contained' 
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateAvater}
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
                        onClick={onClickDeleteAvater}
                    >
                        <b>Delete</b>
                    </Button>
                </div>

                <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                    imageSelectHandeler(e);
                }} />
            </div>
        </section>
    )
}

export default EditAvaterForm