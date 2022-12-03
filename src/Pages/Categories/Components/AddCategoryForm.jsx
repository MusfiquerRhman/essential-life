import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useCallback, useState } from 'react';
import CategoryForm from './CategoryForm';

function AddCategoryForm() {
    const [name, setName] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [recipe, setRecipe] = useState([])

    const handleDeleteRecipe = useCallback((selectedName) => {
        setRecipe(previousChips => previousChips.filter(name => name !== selectedName))
    }, []);

    const addRecipe = (item) => {
        setRecipe(previousRecipe => {
            let recipes = new Set([...previousRecipe, item]);
            return (
                [...recipes]
            )
        })
    }
    
    return (
        <section>
            <h1>New Category</h1>
            <div className='form__container'>
                <CategoryForm 
                    handleDeleteRecipe={handleDeleteRecipe}
                    recipe={recipe}
                    setShortDescription={setShortDescription}
                    shortDescription={shortDescription}
                    setName={setName}
                    addRecipe={addRecipe}
                    name={name}
                />

                <div className='form__actions'>
                    <Button className='form__button' 
                        startIcon={<AddIcon />} 
                        variant='contained' 
                        sx={{ borderRadius: '5rem' }}
                    >
                        Create Category
                    </Button>
                    <Button className='form__button' 
                        startIcon={<AddIcon />} 
                        variant='outlined' 
                        sx={{ borderRadius: '5rem' }}
                    >
                        Create and Add another
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default AddCategoryForm