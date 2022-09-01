import Button from '@mui/material/Button';
import React, { useState } from 'react';

function EditPanelFrom() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");

    const updatePanels = () => {

    }

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

    let imageSelected = "";
    if (displayImage !== "") {
        imageSelected = (
            <div className='img__container'>
                <img src={displayImage} className="img__box" alt="product" />
            </div>
        );
    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Panels</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updatePanels}
                    >
                        Update Panels
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <label htmlFor="name" className='form__label' style={{ marginTop: '2rem' }}>Title</label>
                <input type="text"
                    placeholder='Recipe Name'
                    id='name'
                    className='form__input'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name='name'
                />


                <label htmlFor="description"
                    className='form__label'
                    style={{ marginTop: '1rem' }}
                >
                    Description
                </label>
                <textarea type="text"
                    placeholder='Description'
                    id='description'
                    rows="10"
                    className='form__input'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name='description'
                />

                <label htmlFor="type" className='form__label'>Category</label>
                <select name="ailment"
                    id="type"
                    className='full__length form__select'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option disabled value="">Choose an option</option>
                    <option value="light">Avoid exposure .</option>
                    <option value="dark">application.</option>
                </select>

                <div className='image__option flex__row'>
                    <div>
                        <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem', marginRight: '2rem' }}>Image</label>
                        <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                            imageSelectHandeler(e.target.files);
                        }} />
                    </div>


                    {imageSelected}
                </div>
            </div>

        </section>
    )
}

export default EditPanelFrom