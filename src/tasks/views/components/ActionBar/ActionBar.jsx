import React from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styles } from "./styles";
import { TaskCreation } from "../TaskCreation/TaskCreation.jsx";
import { Link as RouterLink } from "react-router";
export const ActionBar = () => {
    return (
        <Box sx={styles.mainBox}>
            <Box sx={styles.actionButtons}>
                <TaskCreation />
            </Box>
        </Box>
    );
};
