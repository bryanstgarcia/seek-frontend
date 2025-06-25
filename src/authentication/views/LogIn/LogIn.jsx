import { Box, TextField, Button, Typography, useTheme} from '@mui/material';
import React, { useState } from 'react';

export const LogIn = () => {
    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <Box
            sx={{
                minHeight: "90vh",
                mx: 'auto',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 3,
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: 600,
                    width: "100%",
                    mx: 'auto',
                    p: 8,
                    pt: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: theme.palette.neutral.black,
                }}
            >
                <Typography component="h1" variant="h4" fontWeight={600}>
                    Log In 🥳
                </Typography>
                <Typography component="p" variant="h6" fontWeight={400} mb={2}>
                    Conquer your day—log in now and take control of your goals, one task at a time
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    autoComplete="email"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    autoComplete="current-password"
                />
                <Button type="submit" variant="contained" color="primary" size="large">
                    Log In
                </Button>
            </Box>
        </Box>
    );
}