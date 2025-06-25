import { useState } from "react";
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

export function Navbar() {
    const [auth, _] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Box sx={{ flexGrow: 1, maxWidth: "1480px", width: "100%" }}>
                <AppBar position="static" variant="dense">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Task Manager
                        </Typography>
                        {auth ? (
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
                                    <MenuItem onClick={handleClose}>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>Tasks</MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Box sx={{display: "flex", gap: 2}}>
                                <Button
                                    variant="contained"
                                    href="#contained-buttons"
                                    endIcon={<LoginIcon />}
                                >
                                    Log In
                                </Button>
                                <Button
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
