import Button from '@mui/material/Button';
import React, { useState } from 'react';
import IngridiantFrom from './IngridiantFrom';

function EditRecipeIngrediant() {
    const [ingQuantity, setIngQuantity] = useState('')
    const [ingMeasure, setIngMeasure] = useState('')
    const [customeName, setCustomeName] = useState('')
    const [type, setType] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setblend] = useState('')
    const [recipe, setRecipe] = useState('')

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

                <label htmlFor="Recipe" className='form__label' style={{marginTop: '2rem'}}>Recipe</label>
                <select name="Recipe"
                    id="type"
                    className='full__length form__select'
                    onChange={e => setRecipe(e.target.value)}
                    value={recipe}
                >
                    <option disabled value="">Choose an option</option>
                    <option value="light">Bread</option>
                    <option value="dark">Riee</option>
                </select>

            </div>
        </section>
    )
}

export default EditRecipeIngrediant