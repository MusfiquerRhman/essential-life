import Button from '@mui/material/Button';
import React, { useState } from 'react';

function EditTopTipsFrom() {
    const [topTipsDescription, setTopTipsDescription] = useState('')

    const updateTopTips = () => {

    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Top Tips</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateTopTips}
                    >
                        Update Top Tips
                    </Button>
                </div>
            </div>

            <div className='form__container'>
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
                    className='form__input full__length'
                    onChange={(e) => setTopTipsDescription(e.target.value)}
                    value={topTipsDescription}
                    name='description'
                />
            </div>

        </section>
    )
}

export default EditTopTipsFrom