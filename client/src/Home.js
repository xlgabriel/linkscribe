import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import Header from './components/Header';
import SideBar from './components/SideBar';

function Home() {
    const [inputValue, setInputValue] = useState('');

    const handleCopyClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setInputValue(text);
        } catch (error) {
            console.error('Error al leer el portapapeles: ', error);
        }
    };

    return (
        <div>
            <Header />
            <SideBar />
            <div style={{ marginLeft: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '32vh', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    Fast, simple and efficient
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Paste your URL on the text field, and let the A.I. do its job.
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            padding: '10px',
                        }}
                        onClick={handleCopyClipboard}
                    >
                        <ContentPasteGoIcon fontSize="large" />
                    </Button>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Paste your URL here"
                        sx={{
                            marginLeft: '1px',
                            marginRight: '1px',
                            width: '700px',
                        }}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            padding: '10px',
                        }}
                    >
                        <KeyboardArrowRightIcon fontSize="large" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
