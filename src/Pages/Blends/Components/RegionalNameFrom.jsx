import React from 'react';

function RegionalNameFrom(props) {
    const {
        region,
        setRegion,
        setRagionalName,
        ragionalName
    } = props;

    return (
        <>
            <div className='third__length'>
                <label htmlFor="Region" className='form__label'>Region</label>
                <input type="text"
                    placeholder='Region'
                    id='Region'
                    className='form__input full__length'
                    onChange={(e) => setRegion(e.target.value)}
                    value={region}
                    name='Region'
                />
            </div>
            <div className='third__length'>
                <label htmlFor="Name" className='form__label'>Name</label>
                <input type="text"
                    placeholder='Name'
                    id='Name'
                    className='form__input full__length'
                    onChange={(e) => setRagionalName(e.target.value)}
                    value={ragionalName}
                    name='Name'
                />
            </div>
        </>
    )
}

export default RegionalNameFrom