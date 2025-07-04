import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Augment the palette to include an ochre color

// Update the Button's color options to include an ochre option

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#836FFF",
            dark: "#211951", 
            light: "#AFA7FF",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#15F5BA",
            dark: "#0BAF84",
            light: "#8CFFE3",
            contrastText: "#000000",
        },
        error: {
            main: "#d32f2f",
            light: "#ff6659",
            dark: "#9a0007",
            contrastText: "#fff",
        },
        warning: {
            main: "#ed6c02",
            light: "#ff9800",
            dark: "#e65100",
            contrastText: "#fff",
        },
        info: {
            main: "#0288d1",
            light: "#03a9f4",
            dark: "#01579b",
            contrastText: "#fff",
        },
        success: {
            main: "#2e7d32",
            light: "#4caf50",
            dark: "#1b5e20",
            contrastText: "#fff",
        },
        neutral: {
            black: "#181818",
            white: "#f0f0f0",
            light: "#f5f5f5",
            main: "#9e9e9e",
            dark: "#424242",
        },
    },
});

export const ThemeProviderComponent = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
