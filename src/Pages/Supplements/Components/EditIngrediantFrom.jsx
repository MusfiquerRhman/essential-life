import Button from '@mui/material/Button';
import React, { useState } from 'react';
import IngridiantFrom from './IngridiantFrom';

function EditIngrediantFrom() {
    const [ingQuantity, setIngQuantity] = useState('')
    const [ingMeasure, setIngMeasure] = useState('')
    const [customeName, setCustomeName] = useState('')
    const [type, setType] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setblend] = useState('')

    const updateIngredient = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Ingredient</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateIngredient}
                    >
                        Update Ingredient
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <IngridiantFrom
                    quantity={ingQuantity}
                    setQuantity={setIngQuantity}
                    measure={ingMeasure}
                    setMeasure={setIngMeasure}
                    customName={customeName}
                    setCustomName={setCustomeName}
                    type={type}
                    setType={setType}
                    oil={oil}
                    setOil={setOil}
                    blend={blend}
                    setBlend={setblend}
                />
            </div>
        </section>
    )
}

export default EditIngrediantFrom