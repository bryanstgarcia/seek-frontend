import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import { TasksBoard } from "../components/TasksBoard/TasksBoard.jsx";
import { TasksColumn } from "../components/TasksColumn/TasksColumn.jsx";
import { ActionBar } from "../components/ActionBar/ActionBar.jsx";

const columns = [
    { title: "Pending 📋", cards: ["Hola", "como", "estas"] },
    { title: "In Progress 👷🏽", cards: ["Hola", "como", "estas"] },
    { title: "Completed ✅", cards: ["Hola", "como", "estas","Hola", "como", "estas","Hola", "como", "estas",
        "Hola", "como", "estas",
    ] },
];

export const Tasks = () => {
    return (
        <Box sx={{ width: "100%", minHeight: "90vh" }}>
            {/* Header */}
            <ActionBar />
            {/* Columns */}
            <TasksBoard height={"70vh"}>
                {columns.map((col) => (
                    <TasksColumn title={col.title}>
                        {col.cards.map((cardData) => (
                            <Card sx={{minHeight: 100}}>
                                <CardContent>{cardData}</CardContent>
                            </Card>
                        ))}
                    </TasksColumn>
                ))}
            </TasksBoard>
        </Box>
    );
};
