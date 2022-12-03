import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeRememberMe = () => {
        setRememberMe(prevValue => !prevValue)
    }

    const submitLogin = () => {
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            enqueueSnackbar("Invalid Email Address", { variant: 'error' })
            return;
        }

        if (password.length < 8) {
            enqueueSnackbar("Password must be 8 character or long", { variant: 'error' });
            return;
        }

        enqueueSnackbar("ok", { variant: 'success' });
    }

    return (
        <section>
            <div className='login'>
                <h1 className='header__title'>Welcome Back!</h1>
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

                    <label htmlFor="password" className='form__label'>Password</label>
                    <input type="password"
                        placeholder='Password'
                        id='password'
                        className='form__input'
                        onChange={handleChangePassword}
                        value={password}
                        name='password'
                    />
                    <div className='login__actions'>
                        <div>
                            <input
                                id='rememberme'
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleChangeRememberMe}
                            />
                            <label htmlFor="rememberme">Remember Me</label>
                        </div>
                        <NavLink to='/forgot' className='forgot__button'>Forgot Your Password?</NavLink>
                    </div>

                    <Button startIcon={<LoginIcon />} fullWidth sx={{ borderRadius: '2rem' }} variant="contained" onClick={submitLogin}>
                        Login
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Login