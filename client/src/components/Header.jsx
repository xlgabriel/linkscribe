import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAboutUsClick = () => {
        // Lógica para redirigir a la página "About Us"
        // Puedes usar window.location.href para recargar la página actual.
    };

    const handlePricingClick = () => {
        // Lógica para redirigir a la página "Pricing"
        // Puedes usar window.location.href para recargar la página actual.
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#FFFFFF' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Welcome, user
                </Typography>
                <button onClick={handleAboutUsClick} style={{ fontWeight: 'bold', color: '#1976d2', marginRight: '42px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                    About us
                </button>

                <button onClick={handlePricingClick} style={{ fontWeight: 'bold', color: '#1976d2', marginRight: '42px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                    Pricing
                </button>

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                    style={{ marginRight: '16px' }}
                >
                    <AccountCircleIcon color="primary" fontSize="large" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>My profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>About LinkScribe</MenuItem>
                    <MenuItem onClick={handleClose}>Log out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
