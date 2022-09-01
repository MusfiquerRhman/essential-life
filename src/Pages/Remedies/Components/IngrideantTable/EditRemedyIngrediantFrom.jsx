import Button from '@mui/material/Button';
import React, { useState } from 'react';
import IngridiantFrom from './IngridiantFrom';

function EditRemedyIngrediantFrom() {
    const [ingQuantity, setIngQuantity] = useState('')
    const [ingMeasure, setIngMeasure] = useState('')
    const [customeName, setCustomeName] = useState('')
    const [type, setType] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setblend] = useState('')
    const [remedy, setRemedy] = useState('')

    const updateIngredient = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Remedy Ingredient</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateIngredient}
                    >
                        Update Remedy Ingredient
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

            <label htmlFor="related" className='form__label' style={{ marginTop: '1rem' }}>Remedy</label>
            <select name="related"
                id="related"
                className='full__length form__select'
                onChange={(e) => setRemedy(e.target.value)}
                value={remedy}
            >
                <option disabled value="">Choose an option</option>
                <option value="oil">Oil</option>
                <option value="blend">Blend</option>
            </select>
            </div>
        </section>
    )
}

export default EditRemedyIngrediantFrom