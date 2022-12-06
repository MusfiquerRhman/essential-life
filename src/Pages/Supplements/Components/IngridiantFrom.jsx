import { default as React } from 'react';

const IngridiantFrom = React.memo((props) => {
    const {
        quantity,
        setQuantity,
        measure,
        setMeasure,
        customName,
        setCustomName,
        type,
        setType,
        oil,
        setOil,
        blend,
        setBlend
    } = props;


    return (
        <>
            <label htmlFor="Quantity" className='form__label'>Quantity</label>
            <input type="number"
                placeholder='Quantity'
                id='Quantity'
                className='form__input full__length'
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                name='Quantity'
            />

            <label htmlFor="Measure" className='form__label'>Measure</label>
            <input type="number"
                placeholder='Measure'
                id='Measure'
                className='form__input full__length'
                onChange={(e) => setMeasure(e.target.value)}
                value={measure}
                name='Measure'
            />

            <label htmlFor="Custom" className='form__label'>Custom name (instead of related oil/blend)</label>
            <input type="number"
                placeholder='Custom name (instead of related oil/blend)'
                id='Custom'
                className='form__input full__length'
                onChange={(e) => setCustomName(e.target.value)}
                value={customName}
                name='Custom'
            />

            <label htmlFor="related" className='form__label' style={{ marginTop: '1rem' }}>Related Oil/Blend</label>
            <select name="related"
                id="related"
                className='full__length form__select'
                onChange={(e) => setType(e.target.value)}
                value={type}
            >
                <option disabled value="">Choose an option</option>
                <option value="oil">Oil</option>
                <option value="blend">Blend</option>
            </select>

            {
                type === 'oil' && (
                    <>
                        <label htmlFor="Oil" className='form__label' style={{ marginTop: '2rem' }}>Oil</label>
                        <select name="Oil"
                            id="Oil"
                            className='full__length form__select'
                            onChange={(e) => setOil(e.target.value)}
                            value={oil}
                        >
                            <option disabled value="">Choose an option</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                        </select>
                    </>
                )
            }

            {
                type === 'blend' && (
                    <>
                        <label htmlFor="blend" className='form__label' style={{ marginTop: '2rem' }}>Blend</label>
                        <select name="blend"
                            id="blend"
                            className='full__length form__select'
                            onChange={(e) => setBlend(e.target.value)}
                            value={blend}
                        >
                            <option disabled value="">Choose an option</option>
                            <option value="oil">Oil</option>
                            <option value="blend">Blend</option>
                        </select>
                    </>
                )
            }
        </>
    )
})

export default IngridiantFrom