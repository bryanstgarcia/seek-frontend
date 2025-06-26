import React from "react";
import { Box, Button, Card, CardActions, CardContent, useTheme, IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { StatusSelector } from "./StatusSelector";
import { styles } from "./TaskCard.styles";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDeleteTask } from "../../../hooks/useDeleteTask";
import { useGetTasks } from "../../../hooks/useGetTasks";

export const TaskCard = ({
    title = "",
    description = "",
    tags = [],
    status = "pending",
    id,
}) => {
    const theme = useTheme();
    const { deleteTaskById, loading } = useDeleteTask();
    const { getTasks } = useGetTasks();

    const handleDelete = async () => {
        await deleteTaskById(id);
        await getTasks(); 
    };

    return (
        <Card
            sx={{
                minHeight: 250,
                height: "auto",
                maxHeight: 420,
                minWidth: 300,
            }}
        >
            <CardContent
                sx={{ height: "auto", maxHeight: 220, overflow: "hidden" }}
            >
                <Typography
                    gutterBottom
                    variant="h6"
                    component="h4"
                    noWrap={title.length > 120}
                    sx={{...styles.textOverflow, fontWeight: "700", color: theme.palette.secondary.light}}
                >
                    {title}
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    sx={{
                        ...styles.textOverflow,
                        height: "auto",
                        maxHeight: 90,
                        lineClamp: "4",
                        "-webkit-line-clamp": "4",
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
                <StatusSelector taskId={id} status={status} />
                <IconButton
                    variant="outlined"
                    color="error"
                    onClick={handleDelete}
                    disabled={loading}
                    aria-label="delete task"
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </CardActions>
            <Divider />
            <Box sx={{ p: 2, display: "flex", gap: 2 }}>
                <Typography gutterBottom variant="body2">
                    Categories
                </Typography>
                <Stack direction="row" spacing={1}>
                    {tags.map((tag) => (
                        <Chip
                            color="secondary"
                            variant="outlined"
                            label={tag.name}
                            size="small"
                            key={crypto.randomUUID()}
                        />
                    ))}
                </Stack>
            </Box>
        </Card>
    );
};
