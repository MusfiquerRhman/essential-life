import React from 'react';

const PropertiesForm = React.memo((props) => {
    const { state, dispatch, ACTION_TYPE } = props;

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
        <React.Fragment>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text"
                placeholder='Name'
                id='name'
                className='form__input'
                onChange={onChangeInput}
                value={state.name}
                name='name'
            />

            <label htmlFor="description"
                className='form__label'
                style={{ marginTop: '1rem' }}
            >
                Description
            </label>
            <textarea type="text"
                placeholder='description'
                id='description'
                rows="10"
                className='form__input'
                onChange={onChangeInput}
                value={state.description}
                name='description'
            />

            <label htmlFor="type" className='form__label'>Type</label>
            <select name="type"
                id="type"
                className='full__length form__select'
                onChange={onChangeInput}
                value={state.type}
            >
                <option disabled value="">Choose an option</option>
                <option value="property">Property</option>
                <option value="constituents">Constituents</option>
            </select>
        </React.Fragment>
    )
})

export default PropertiesForm