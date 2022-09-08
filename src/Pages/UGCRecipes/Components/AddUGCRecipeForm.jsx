import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import { ACTION_TYPE, INITIAL_STATE, UGCRecipeReducer } from '../../../Reducers/UGCRecipeReducer';


function AddUGCRecipeForm() {
    const [state, dispatch] = useReducer(UGCRecipeReducer, INITIAL_STATE)
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

    const onChangeInput = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }
    
    return (
        <section>
            <h1>New Recipe</h1>
            <div className='form__container'>
                <label htmlFor="name" 
                    className='form__label'
                >
                    Name
                </label>
                <input value={state.name} 
                    name='name' 
                    onChange={onChangeInput} 
                    type="text" 
                    placeholder='Name' 
                    id='name' 
                    className='form__input' 
                />

                <label htmlFor="method" 
                    className='form__label'
                >
                    Method
                </label>
                <textarea value={state.method} 
                    name='method'
                    type="text" 
                    placeholder='Method' 
                    id='method' 
                    className='form__input' 
                    rows="10" 
                    readOnly
                    disabled
                />

                <label htmlFor="Category" 
                    className='form__label'
                >
                    Recipe Category
                </label>
                <input value={state.category} 
                    name='category' 
                    type="text" 
                    placeholder='Recipe Category' 
                    id='Category' 
                    className='form__input' 
                    readOnly
                    disabled
                />

                <label htmlFor="Status" 
                    className='form__label'
                >
                    Status
                </label>
                <input value={state.status} 
                    name='status' 
                    type="text" 
                    placeholder='Status' 
                    id='Status' 
                    className='form__input' 
                    readOnly
                    disabled
                />

                <label htmlFor="user" 
                    className='form__label'
                >
                    Added by user
                </label>
                <input value={state.added_by} 
                    name='added_by' 
                    type="text" 
                    placeholder='Added by user' 
                    id='user' 
                    className='form__input'
                    readOnly
                    disabled
                />

                <label className='form__label' 
                    htmlFor="myfile"
                >
                    Select an Image:
                </label>
                <input className='file__input' 
                    type="file" 
                    id="myfile" 
                    name="myfile" 
                    onChange={(e) => {
                        imageSelectHandeler(e.target.files);
                    }} 
                />

                <div className='form__actions'>
                    <Button className='form__button' 
                        startIcon={<AddIcon />} 
                        variant='contained' 
                        sx={{ borderRadius: '5rem' }}
                    >
                        Create Recipe
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

export default AddUGCRecipeForm