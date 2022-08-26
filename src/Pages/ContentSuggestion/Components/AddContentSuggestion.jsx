import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useState } from 'react';

function AddContentSuggestion() {
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");

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
    return (
        <section>
            <h1>New Content Suggestion</h1>
            <div className='form__container'>
                <label htmlFor="name" className='form__label'>Name</label>
                <input type="text" placeholder='Name' id='#name' className='form__input' />

                <label htmlFor="method" className='form__label'>Type</label>
                <textarea type="text" placeholder='Type' id='#method' className='form__input' rows="10" />

                <label htmlFor="Category" className='form__label'>Content</label>
                <input type="text" placeholder='Content' id='#Category' className='form__input' />

                <label className='form__label' htmlFor="myfile">Select an Image:</label>
                <input className='file__input' type="file" id="myfile" name="myfile" onChange={(e) => {
                    imageSelectHandeler(e.target.files);
                }} />

                <div className='form__actions'>
                    <Button className='form__button' startIcon={<AddIcon />} variant='contained' sx={{ borderRadius: '5rem' }}>Create Content Suggestion</Button>
                    <Button className='form__button' startIcon={<AddIcon />} variant='outlined' sx={{ borderRadius: '5rem' }}>Create and Add another</Button>
                </div>
            </div>

        </section>
    )
}

export default AddContentSuggestion