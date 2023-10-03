import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddLinkIcon from '@mui/icons-material/AddLink';
import CategoryIcon from '@mui/icons-material/Category';
import logoImg from '../assets/linkscribesidebar.png';
import sidebarBg from '../assets/sidebarbg.png';
import SearchIcon from '@mui/icons-material/Search';

function SideBar() {
    const [open, setOpen] = React.useState(true);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    const handleReload = () => {
        window.location.reload();
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
                },
            }}
        >
            <List>
                <ListItem>
                    <IconButton onClick={handleReload}>
                        <img
                            src={logoImg}
                            alt="LinkScribe Logo"
                            style={{ cursor: 'pointer', width: '100%' }}
                        />
                    </IconButton>
                </ListItem>
                <br></br>
                <ListItem button sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.4)' } }}>
                    <AddLinkIcon style={{ marginRight: '8px' }} />
                    <ListItemText primary="Extract new info" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
                </ListItem>
                <ListItem button sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.3)' } }}>
                    <CategoryIcon style={{ marginRight: '8px' }} />
                    <ListItemText primary="Your categories" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
                </ListItem>
                <ListItem button sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>
                    <SearchIcon style={{ marginRight: '8px' }} />
                    <ListItemText primary="Advanced search" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
                </ListItem>
                <ListItem button sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
                    <SettingsIcon style={{ marginRight: '8px' }} />
                    <ListItemText primary="User settings" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
                </ListItem>
                <ListItem button sx={{ "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.5)' } }}>
                    <ExitToAppIcon style={{ marginRight: '8px' }} />
                    <ListItemText primary="Log out" primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideBar;
