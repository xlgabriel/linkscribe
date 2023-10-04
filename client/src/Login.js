import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from './firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SignInSide() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [openAlert, setOpenAlert] = React.useState(false);

    const handleOpenAlert = () => {
        setOpenAlert(true);
    };

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home/extract');
        } catch (error) {
            handleOpenAlert();
            console.error(error);
        }
    };

    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 8,
                }}
            >
                <Grid container>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: "url(https://i.imgur.com/iPauj1H.png)",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[50]
                                    : theme.palette.grey[900],
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Welcome back
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSignIn} // Llama a la función de inicio de sesión en lugar de handleSubmit
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email} // Asigna el valor del estado email
                                    onChange={(e) => setEmail(e.target.value)} // Actualiza el estado email al cambiar el campo
                                    sx={{
                                        "& label.Mui-focused": {
                                            color: "#5800FF",
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottomColor: "#5800FF",
                                        },
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password} // Asigna el valor del estado password
                                    onChange={(e) => setPassword(e.target.value)} // Actualiza el estado password al cambiar el campo
                                    sx={{
                                        "& label.Mui-focused": {
                                            color: "#5800FF",
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottomColor: "#5800FF",
                                        },
                                    }}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        backgroundColor: "#5800FF",
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
                                    <MuiAlert
                                        elevation={6}
                                        variant="filled"
                                        severity="error"
                                        onClose={() => setOpenAlert(false)}
                                    >
                                        Login failed. Please review the information provided.
                                    </MuiAlert>
                                </Snackbar>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            href="#"
                                            variant="body2"
                                            sx={{
                                                color: "#5800FF",
                                            }}
                                        >
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            href="/signup"
                                            variant="body2"
                                            sx={{
                                                color: "#5800FF",
                                            }}
                                        >
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
