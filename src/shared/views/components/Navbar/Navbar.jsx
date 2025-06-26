import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Button from '@mui/material/Button';
import { Link as RouterLink, useNavigate } from 'react-router';
import { Link } from "@mui/material";
import { AuthContext } from "../../../../authentication/state/AuthContext.jsx";

export function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { userAuth, authenticate } = useContext(AuthContext);
    const isAuthenticated = Boolean(userAuth?.token);
    const navigate = useNavigate()
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        authenticate({ userId: null, token: null });
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/")
        handleClose();
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, maxWidth: "1480px", width: "100%" }}>
                <AppBar position="static" variant="dense">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
                        <Link
                            to="/"
                            component={RouterLink}
                            variant="h5"
                            color="secondary.light"
                            fontWeight={600}
                            sx={{ textDecoration: "none" }}
                        >
                            TManager
                        </Link>
                        {isAuthenticated ? (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem
                                        component={RouterLink}
                                        to="/dashboard"
                                        onClick={handleClose}
                                    >
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem
                                        component={RouterLink}
                                        to="/tasks"
                                        onClick={handleClose}
                                    >
                                        Tasks
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        Sign out
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Box sx={{display: "flex", gap: 2}}>
                                <Button
                                    to="/login"
                                    component={RouterLink}
                                    variant="contained"
                                    href="#contained-buttons"
                                    endIcon={<LoginIcon />}
                                >
                                    Log In
                                </Button>
                                <Button
                                    to="/signup"
                                    component={RouterLink}
                                    variant="outlined"
                                    href="#contained-buttons"
                                >
                                    Sign Up
                                </Button>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
}
