import React from "react";
import { Box } from "@mui/material";
import { styles } from "./styles";

export const TasksBoard = ({ children }) => {
    return (
        <Box
            sx={{...styles.mainBox, height: {
                sm: "auto",
                
            }}}
        >
            { children }
        </Box>
    );
};
