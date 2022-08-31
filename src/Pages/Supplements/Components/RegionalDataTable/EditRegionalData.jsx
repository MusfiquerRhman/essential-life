import Button from '@mui/material/Button';
import React, { useState } from 'react';
import RegionalNameFrom from "../RegionalNameFrom";

function EditRegionalData() {
    const [region, setRegion] = useState('');
    const [ragionalName, setRagionalName] = useState('');

    const updateRegionalName = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Regional Name</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateRegionalName}
                    >
                        Update Regional Name
                    </Button>
                </div>
            </div>

            <div className='form__container flex__row' style={{ alignItems: 'center' }}>
                <RegionalNameFrom
                    region={region}
                    setRegion={setRegion}
                    setRagionalName={setRagionalName}
                    ragionalName={ragionalName}
                />
            </div>
        </section>
    )
}

export default EditRegionalData