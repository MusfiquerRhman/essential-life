import Button from '@mui/material/Button';
import React from 'react';

function GlobalStatusForm(props) {
    const {
        status,
        handleChange,
        onClickUpdate,
        os
    } = props;
    return (
        <div className='global-status__container'>
            <div className='flex__row globalStatus__top'>
                <label htmlFor="type" className='form__label' style={{ width: '30%' }}>Status</label>
                <select name="avaterId"
                    id="type"
                    className='full__length form__select'
                    onChange={handleChange}
                    value={status}
                >
                    <option disabled value={''}>Choose an option</option>
                    <option value={'ok'}>Ok</option>
                    <option value={'warning'}>Warning</option>
                    <option value={'error'}>Error</option>
                </select>
            </div>

            <div className='globalStatus__bottom'>
                <p className='light__text'>Last update: Never</p>
                <Button className='form__button'
                    variant='contained'
                    sx={{ borderRadius: '5rem' }}
                >
                    Update {os} Global Status
                </Button>
            </div>


        </div>

    )
}

export default GlobalStatusForm