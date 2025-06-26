import React from "react";
import { Box } from "@mui/material";
import { TasksBoard } from "../components/TasksBoard/TasksBoard.jsx";
import { TasksColumn } from "../components/TasksColumn/TasksColumn.jsx";
import { ActionBar } from "../components/ActionBar/ActionBar.jsx";
import { TaskCard } from "../components/TaskCard/TaskCard.jsx";
import { useGetTasks } from "../../hooks/useGetTasks";
import { Dashboard } from "../components/Dashboard/Dashboard.jsx";

const statusMap = {
    pending: "Pending 📋",
    in_progress: "In Progress 👷🏽",
    completed: "Completed ✅",
};

export const Tasks = () => {
    const { tasks, loading, error } = useGetTasks({ autoFetch: true });

    // Group tasks by status
    const columns = Object.entries(statusMap).map(([status, title]) => ({
        title,
        cards: tasks.filter((task) => task.status === status),
    }));

    return (
        <Box sx={{ width: "100%", minHeight: "90vh" }}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: {
                        xs: "flex-start",
                        md: "space-between"
                    },
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    alignItems: "flex-start"
                }}
            >
                <Dashboard />
                <ActionBar />
            </Box>
            {/* Columns */}
            <TasksBoard>
                {columns.map((col) => (
                    <TasksColumn title={col.title} key={crypto.randomUUID()}>
                        {col.cards.map((card) => (
                            <TaskCard
                                id={card.id}
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                status={card.status}
                                tags={card.tags}
                            />
                        ))}
                    </TasksColumn>
                ))}
            </TasksBoard>
            {loading && (
                <Box sx={{ textAlign: "center", mt: 4 }}>Loading tasks...</Box>
            )}
            {error && (
                <Box sx={{ textAlign: "center", mt: 4, color: "red" }}>
                    {error}
                </Box>
            )}
        </Box>
    );
};
