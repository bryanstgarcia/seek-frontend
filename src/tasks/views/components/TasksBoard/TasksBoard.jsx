import React from "react";
import { Box } from "@mui/material";
import { styles } from "./styles";

export const TasksBoard = ({ height, children }) => {
    return (
        <Box
            sx={{...styles.mainBox, height}}
        >
            { children }
        </Box>
    );
};
