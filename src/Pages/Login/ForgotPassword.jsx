import LockResetIcon from '@mui/icons-material/LockReset';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';

const ForgotPassword = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const submitLogin = () => {
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            enqueueSnackbar("Invalid Email Address", { variant: 'error' })
            return;
        }

        enqueueSnackbar("ok", { variant: 'success' });
    }

    return (
        <section>
            <div className='login'>
                <h1 className='header__title'>Forgot Your Password?</h1>
                <hr className='Login__divider' />
                <div className='login__form'>
                    <label htmlFor="email" className='form__label'>Email Address</label>
                    <input type="text"
                        placeholder='Email'
                        id='email'
                        className='form__input'
                        onChange={handleChangeEmail}
                        value={email}
                        name='email'
                    />

                    <Button startIcon={<LockResetIcon />} fullWidth sx={{ borderRadius: '2rem' }} variant="contained" onClick={submitLogin}>
                        Send Password Reset Link
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword