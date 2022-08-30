import React, { useEffect } from 'react';

function FavoutriteType(props) {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const onChangeInput = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }

    useEffect(() => {
        console.log(state)
    }, [state])



    return (
        <>
            <div className='solution__form--item'>
                <label htmlFor="type" className='form__label'>Favourited Resource</label>
                <select name="type" id="type" 
                    className='full__length form__select' 
                    onChange={onChangeInput} 
                    value={state.type} 
                    style={{ marginBottom: '1rem' }}
                >
                    <option disabled value="">Choose an option</option>
                    <option value="oil">Oil</option>
                    <option value="blend">Blend</option>
                    <option value="supplement">Supplement</option>
                    <option value="recipe">Recipe</option>
                    <option value="remedy">Remedy</option>
                    <option value="body_system">Body System</option>
                    <option value="ailment">Ailment</option>
                    <option value="category">Category</option>
                </select>
            </div>
            {
                state.type === '' && (
                    <div className='solution__form--item'>
                        <label className='form__label'>{'\u00A0'}</label>
                        <select disabled name="" id="type" 
                            className='full__length form__select' 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">{'\u00A0'}</option>
                        </select>
                    </div>
                )
            }

            {
                state.type === 'oil' && (
                    <div className='solution__form--item'>
                        <label htmlFor="oil" className='form__label'>Oil</label>
                        <select name="oil" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.oil} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose an Oil</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'blend' && (
                    <div className='solution__form--item'>
                        <label htmlFor="blend" className='form__label'>Blend</label>
                        <select name="blend" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.blend} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Blend</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'supplement' && (
                    <div className='solution__form--item'>
                        <label htmlFor="supplement" className='form__label'>Supplement</label>
                        <select name="supplement" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.supplement} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Supplement</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'recipe' && (
                    <div className='solution__form--item'>
                        <label htmlFor="recipe" className='form__label'>Recipe</label>
                        <select name="recipe" 
                            id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.recipe} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Recipe</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'remedy' && (
                    <div className='solution__form--item'>
                        <label htmlFor="remedy" className='form__label'>Remedy</label>
                        <select name="remedy" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.remedy} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Remedy</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'body_system' && (
                    <div className='solution__form--item'>
                        <label htmlFor="body_system" className='form__label'>Body System</label>
                        <select name="body_system" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.body_system} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Body System</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'ailment' && (
                    <div className='solution__form--item'>
                        <label htmlFor="ailment" className='form__label'>Ailment</label>
                        <select name="ailment" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.ailment} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Ailment</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
            {
                state.type === 'category' && (
                    <div className='solution__form--item'>
                        <label htmlFor="category" className='form__label'>Category</label>
                        <select name="category" id="type" 
                            className='full__length form__select' 
                            onChange={onChangeInput} 
                            value={state.category} 
                            style={{ marginBottom: '1rem' }}
                        >
                            <option disabled value="">Choose a Category</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                            <option value="supplement">Supplement</option>
                        </select>
                    </div>
                )
            }
        </>
    )
}

export default FavoutriteType