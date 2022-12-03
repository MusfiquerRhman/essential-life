import { default as React } from 'react';

const ContituentsForm = React.memo((props) => {
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

    return (
        <>
            <label htmlFor="name" className='form__label' style={{ marginTop: '2rem' }}>Name</label>
            <input type="text"
                placeholder='Name'
                id='name'
                className='form__input'
                onChange={onChangeInput}
                value={state.name}
                name='name'
            />

            <label htmlFor="type" className='form__label'>Type</label>
            <select name="safety_information"
                id="type"
                className='full__length form__select'
                onChange={onChangeInput}
                value={state.type}
            >
                <option disabled value="">Choose an option</option>
                <option value="property">Property</option>
                <option value="constituents">Constituents</option>
            </select>
        </>
    )
})

export default ContituentsForm;