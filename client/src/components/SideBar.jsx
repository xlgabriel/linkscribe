import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddLinkIcon from '@mui/icons-material/AddLink';
import CategoryIcon from '@mui/icons-material/Category';
import logoImg from '../assets/linkscribesidebar.png';
import sidebarBg from '../assets/sidebarbg.png';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function SideBar() {
    const [open, setOpen] = React.useState(true);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            variant="persistent"
            sx={{
                width: 200,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    backgroundColor: '#5800FF',
                    color: 'white',
                    backgroundImage: `url(${sidebarBg})`,
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column', // Cambio de dirección de la lista a columna
                    justifyContent: 'space-between', // Espacio entre elementos
                    height: '100%', // Ocupa todo el espacio vertical
                },
            }}
        >
            <List>
                <ListItem>
                    {/* Utiliza el componente Link para redirigir a /home/extract */}
                    <Link to="/home/extract" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <IconButton>
                            <img
                                src={logoImg}
                                alt="LinkScribe Logo"
                                style={{ cursor: 'pointer', width: '100%' }}
                            />
                        </IconButton>
                    </Link>
                </ListItem>
                <br></br>
                <ListItemButton component={Link} to="/home/extract" sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.5)' } }}>
                    <AddLinkIcon style={{ marginRight: '8px', flexShrink: 0 }} />
                    <ListItemText primary="Extract info from URL" primaryTypographyProps={{ style: { fontWeight: 'bold' }, sx: { flexGrow: 1 } }} />
                </ListItemButton>
                <ListItemButton component={Link} to="/home/categories" sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.4)' } }}>
                    <CategoryIcon style={{ marginRight: '8px', flexShrink: 0 }} />
                    <ListItemText primary="Your categories" primaryTypographyProps={{ style: { fontWeight: 'bold' }, sx: { flexGrow: 1 } }} />
                </ListItemButton>
                <ListItemButton component={Link} to="/home/search" sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.3)' } }}>
                    <SearchIcon style={{ marginRight: '8px', flexShrink: 0 }} />
                    <ListItemText primary="Advanced search" primaryTypographyProps={{ style: { fontWeight: 'bold' }, sx: { flexGrow: 1 } }} />
                </ListItemButton>
                <ListItemButton component={Link} to="/home/settings" sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>
                    <SettingsIcon style={{ marginRight: '8px', flexShrink: 0 }} />
                    <ListItemText primary="User settings" primaryTypographyProps={{ style: { fontWeight: 'bold' }, sx: { flexGrow: 1 } }} />
                </ListItemButton>
            </List>
            {/* Botón "Log out" al final */}
            <List>
                <ListItemButton component={Link} to="/login" sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
                    <ExitToAppIcon style={{ marginRight: '8px', flexShrink: 0 }} />
                    <ListItemText primary="Log out" primaryTypographyProps={{ style: { fontWeight: 'bold' }, sx: { flexGrow: 1 } }} />
                </ListItemButton>
            </List>
        </Drawer>
    );
}

export default SideBar;
