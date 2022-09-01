import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import { ACTION_TYPE, INITIAL_STATE, recipeReducer } from '../../../Reducers/recipesReducer';
import IngrediantTable from './Ingrediant/IngrediantTable';
import IngridiantFrom from "./Ingrediant/IngridiantFrom";
import RecipeForm from './RecipesForm';



function EditRecipeFrom() {
    const [state, dispatch] = useReducer(recipeReducer, INITIAL_STATE)
    const [selectedIngridiants, setselectedIngridiants] = useState([])

    const [ingQuantity, setIngQuantity] = useState('')
    const [ingMeasure, setIngMeasure] = useState('')
    const [customeName, setCustomeName] = useState('')
    const [type, setType] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setblend] = useState('')

    const handleSelectDeleteIngridiants = () => {

    }


    const updateRecipe = () => {

    }


    const addIngrediant = () => {

    }

    const [action, setAction] = useState('');

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Recipe</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateRecipe}
                    >
                        Update Recipe
                    </Button>

                    <select name="Days" id="days" defaultValue={action} onChange={handleChangeAction}>
                        <option disabled value="">Select an Action</option>
                        <option value="force">Force Update</option>
                    </select>

                    <Button
                        id="action-button"
                        aria-haspopup="true"
                        onClick={handleClickExecuteAction}
                        variant='contained'
                        sx={{
                            padding: '0.5rem',
                            borderRadius: '2rem',
                            marginLeft: '1rem'
                        }}
                        disabled={action === '' ? true : false}
                    >
                        <DoneIcon />
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <RecipeForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>


            <h1 style={{ marginTop: '5rem' }}>Ingredients</h1>
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
                <Button className='form__button'
                    variant='contained'
                    sx={{ borderRadius: '5rem', marginTop: '1rem' }}
                    startIcon={<AddIcon />}
                    onClick={addIngrediant}
                    style={{ float: 'right', width: 'fit-content', marginLeft: 'auto' }}
                >
                    Add Ingrediant
                </Button>
            </div >

            <div className='table__card'>
                <IngrediantTable
                    setSelectedArray={setselectedIngridiants}
                    handleSelectDeleteAll={handleSelectDeleteIngridiants}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Links</h1>
            <div className='form__container'>
                <p>Internal deep link:</p>
                <p className='link'><b>essentiallife://resource/Ailment/04dfe2f8-51f1-4e60-bcf0-2da6301c2ad2</b></p>

                <p>Web sharing link:</p>
                <p className='link'><b>https://link.essentiallife.com/Ailment/04dfe2f8-51f1-4e60-bcf0-2da6301c2ad2</b></p>
            </div>


        </section>
    )
}

export default EditRecipeFrom