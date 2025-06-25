import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router";

export const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: { xs: "88vh" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 3,
                py: 8,
                color: theme.palette.neutral.white,
            }}
        >
            <Typography
                variant="h1"
                component="h1"
                sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "2.2rem", md: "3rem", lg: "4.5rem" },
                }}
            >
                Organize Your{" "}
                <Box
                    component="span"
                    sx={{
                        color: theme.palette.secondary.main,
                        display: "inline",
                    }}
                >
                    Tasks
                </Box>{" "}
                Effortlessly
            </Typography>
            <Typography
                component="p"
                variant="h6"
                sx={{
                    mb: 4,
                    color: theme.palette.neutral.light,
                    fontWeight: 400,
                    fontSize: { xs: "1.1rem", md: "1.5rem", lg: "1.8rem" },
                }}
            >
                <Box
                    component="span"
                    sx={{
                        color: theme.palette.primary.light,
                        display: "inline",
                    }}
                >
                    Boost your productivity
                </Box>{" "}
                with our intuitive and powerful task manager. <br />Stay on top of
                your work, deadlines, and goals—all in one place.
            </Typography>
            <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                color={"primary"}
                size="large"
                sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    borderRadius: 3,
                    boxShadow: 2,
                }}
            >
                Get Started
            </Button>
        </Box>
    );
};
