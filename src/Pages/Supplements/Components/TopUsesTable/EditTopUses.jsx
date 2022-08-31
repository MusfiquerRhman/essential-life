import Button from '@mui/material/Button';
import React, { useState } from 'react';

function EditTopUses() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ailment, setAilment] = useState('')
    const [supplement, setSupplement] = useState('')

    const updateTopUses = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Top uses</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateTopUses}
                    >
                        Update Top Uses
                    </Button>
                </div>
            </div>

            <div className='form__container'>

                <label htmlFor="name" className='form__label' style={{ marginTop: '2rem' }}>Name</label>
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

                <label htmlFor="type" className='form__label'>Ailment</label>
                <select name="ailment"
                    id="type"
                    className='full__length form__select'
                    onChange={(e) => setAilment(e.target.value)}
                    value={ailment}
                >
                    <option disabled value="">Choose an option</option>
                    <option value="light">Avoid exposure .</option>
                    <option value="dark">application.</option>
                </select>

                <label htmlFor="type" className='form__label' style={{ marginTop: '2rem' }}>Supplement</label>
                <select name="supplement"
                    id="type"
                    className='full__length form__select'
                    onChange={(e) => setSupplement(e.target.value)}
                    value={supplement}
                >
                    <option disabled value="">Choose an option</option>
                    <option value="light">Acation.</option>
                    <option value="dark">Avoid  application.</option>
                </select>
            </div>

        </section>
    )
}

export default EditTopUses