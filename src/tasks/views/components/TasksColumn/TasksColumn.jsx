import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./styles";
export const TasksColumn = ({ title, children }) => {
    return (
        <Box
            key={title}
            sx={styles.columnBox}
        >
            <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
                sx={{ letterSpacing: 1 }}
            >
                {title}
            </Typography>
            { children }
        </Box>
    );
};
