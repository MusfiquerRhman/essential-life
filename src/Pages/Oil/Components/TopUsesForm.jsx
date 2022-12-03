import React from 'react';

const TopUsesForm = React.memo((props) => {
    const { name, setName, setDescription, description, ailment, setAilment } = props;

    return (
        <>
            <div className='third__length'>
                <label htmlFor="name" className='form__label'>Name</label>
                <input type="text"
                    placeholder='Name'
                    id='name'
                    className='form__input full__length'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name='name'
                />
            </div>
            <div className='third__length'>
                <label htmlFor="description"
                    className='form__label'
                    style={{ marginTop: '1rem' }}
                >
                    Description
                </label>
                <textarea type="text"
                    placeholder='Description'
                    id='description'
                    rows="10"
                    className='form__input full__length'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name='description'
                />
            </div>

            <div className='third__length'>
                <label htmlFor="ailment" className='form__label'>Ailment</label>
                <select name="textStyle"
                    id="type"
                    className='full__length form__select'
                    onChange={(e) => setAilment(e.target.value)}
                    value={ailment}
                >
                    <option disabled value="">Choose an option</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </>
    )
})

export default TopUsesForm