import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Alert from "@mui/material/Alert";
import { styles } from "./styles";
import { useNavigate } from "react-router";

export const LogIn = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(null)
    const { loading, error, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        const {token, userId } = await login(email, password);
        if (token && userId) {
            setSuccess(true)
            setTimeout(() => {
                navigate("/tasks")
                setSuccess(null)
            }, 2000)
        }
    };

    return (
        <Box
            sx={styles.mainBox}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    ...styles.form,
                    backgroundColor: theme.palette.neutral.black,
                }}
            >
                <Typography component="h1" variant="h4" fontWeight={600}>
                    Log In 🥳
                </Typography>
                <Typography component="p" variant="h6" fontWeight={400} mb={2}>
                    Conquer your day—log in now and take control of your goals,
                    one task at a time
                </Typography>
                {error ? (
                    <Alert severity="error">There is an error: {error}</Alert>
                ) : null}
                {success && !error ? (
                    <Alert severity="success">Welcome! ✅</Alert>
                ) : null}
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    loading={loading}
                >
                    Log In
                </Button>
            </Box>
        </Box>
    );
};
