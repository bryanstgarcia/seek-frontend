import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from 'react-router';
import Link from '@mui/material/Link';

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
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "2.2rem", md: "3rem" },
        }}
      >
        Organize Your Tasks Effortlessly
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          mb: 4,
          color: theme.palette.neutral.light,
          fontWeight: 400,
          fontSize: { xs: "1.1rem", md: "1.5rem" },
        }}
      >
        Boost your productivity with our intuitive and powerful task manager. <br />Stay on top of your work, deadlines, and goals—all in one place.
      </Typography>
      <Link 
        component={RouterLink} 
        to="/login"
        variant="contained"
        color="primary"
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
      </Link>
    </Box>
  );
};

