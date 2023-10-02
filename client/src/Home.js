import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Bienvenido a LinkScribe
            </Typography>
            <Typography variant="body1" align="center">
                LinkScribe es una aplicación inteligente para organizar tus enlaces de forma eficiente.
            </Typography>
        </div>
    );
}

export default Home;
