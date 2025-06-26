import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import Alert from "@mui/material/Alert";
import { styles } from "./styles";
import { useNavigate } from "react-router";

export const SignUp = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(null);
    const { register, loading, error } = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await register(email, password);
        
        if (result) {
            setSuccess(true);
            setTimeout(() => {
                navigate("/login")
                setSuccess(null)
            }, 2000)
        }

    };

    return (
        <Box sx={styles.mainBox}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    ...styles.form,
                    backgroundColor: theme.palette.neutral.black,
                }}
            >
                <Typography component="h1" variant="h4" fontWeight={600}>
                    Sign up ⚡️
                </Typography>
                <Typography component="p" variant="h6" fontWeight={400} mb={2}>
                    Start strong—sign up now and turn your plans into progress,
                    one task at a time!
                </Typography>
                {error ? (
                    <Alert severity="error">There is an error: {error}</Alert>
                ) : null}
                {success ? (
                    <Alert severity="success">Registration successful!</Alert>
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
                    disabled={loading}
                    loading={loading}
                >
                    {loading ? "Registering..." : "Sign Up"}
                </Button>
            </Box>
        </Box>
    );
};
