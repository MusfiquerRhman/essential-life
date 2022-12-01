import React from 'react';

function AvaterForm(props) {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const imageSelectHandler = (event) => {
        dispatch({
            type: ACTION_TYPE.FILE_CHANGE,
            payload: {
                name: event.target.name,
                image: event.target.files
            }
        })
    };

    return (
        <>
            <label className='form__label' htmlFor="photo">Photo</label>
            <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                imageSelectHandler(e);
            }} />
        </>
    )
}

export default AvaterForm