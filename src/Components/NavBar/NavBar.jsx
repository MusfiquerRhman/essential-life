import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import logo from '../../assests/logo.svg';
import SearchBox from '../Common/SearchBox';
import './navbarStyles.scss';

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [language, setLanguage] = useState('english');
    const [userName, setUserName] = useState('Musfiquer Rhman');
    const [userLogo, setUserLogo] = useState(logo)

    const onChangeLanguage = (e) => {
        setLanguage(e.target.value)
        localStorage.setItem('language', language);
    }

    return (
        <div className='navbar__container'>
            <SearchBox />
            <div className='navbar__options'>
                <label htmlFor="language" className='language__label'>Language</label>
                <select name="Languages" id="language" defaultValue={language} onChange={onChangeLanguage}>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="portugese">Portugese</option>
                    <option value="japaness">Japaness</option>
                </select>
                <div className='user'>
                    <div className='user__img--box'>
                        <img src={userLogo} alt="user" className='user__img' />
                    </div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {userName}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default NavBar