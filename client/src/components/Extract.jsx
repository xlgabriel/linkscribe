import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Extract() {
    const [inputValue, setInputValue] = useState('');
    const [extractedData, setExtractedData] = useState(null); // Aquí almacenaremos los datos extraídos

    const handleCopyClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setInputValue(text);
        } catch (error) {
            console.error('Error al leer el portapapeles: ', error);
        }
    };

    // Esta función simula la llamada a la API para obtener los datos
    const extractDataFromAPI = async () => {
        const apiUrl = 'http://192.168.80.15:5000/link';
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({ url: inputValue }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            setExtractedData(data); // Almacena los datos en el estado
        } else {
            console.error('Error al obtener datos de la API');
        }
    };

    return (
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
                    onClick={extractDataFromAPI}
                >
                    <KeyboardArrowRightIcon fontSize="large" />
                </Button>
            </div>

            {/* Esta sección mostrará los resultados de la extracción */}
            {extractedData && (
                <Paper elevation={3} style={{ marginTop: '24px', padding: '16px' }}>
                    <Typography variant="h4" gutterBottom>
                        Extracted Data
                    </Typography>
                    <Card sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                        <CardMedia
                            component="img"
                            alt="Extracted Image"
                            height="100"
                            src={extractedData.imageUrl}
                        />
                        <CardContent>
                            <Typography variant="h6">{extractedData.title}</Typography>
                            <Typography variant="body2">{extractedData.description}</Typography>
                        </CardContent>
                    </Card>
                </Paper>
            )}
        </div>
    );
}

export default Extract;
