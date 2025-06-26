import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import { styles } from "./styles";
import { useCreateTask } from "../../../hooks/useCreateTask";
import { useGetTasks } from "../../../hooks/useGetTasks";

export function TaskCreationModal({ open, handleClose }) {
    const [taskName, setTaskName] = React.useState("");
    const [taskDescription, setTaskDescription] = React.useState("");
    const [tagInput, setTagInput] = React.useState("");
    const [tags, setTags] = React.useState([]);
    const { createTask, loading, error } = useCreateTask();
    const { getTasks } = useGetTasks();

    const handleAddTag = () => {
        const trimmed = tagInput.trim();
        if (trimmed && !tags.includes(trimmed)) {
            setTags([...tags, trimmed]);
        }
        setTagInput("");
    };

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    };

    const handleTagInputKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createTask({
            title: taskName,
            description: taskDescription,
            tags,
        });
        if (result) {
            setTaskName("");
            setTaskDescription("");
            setTags([]);
            setTagInput("");
            await getTasks();
            handleClose();
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={styles.modalMainBox}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    mb={2}
                >
                    Create a New Task
                </Typography>
                <TextField
                    label="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    fullWidth
                    multiline
                    minRows={2}
                    maxRows={4}
                    sx={{ mb: 2 }}
                />
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                    <TextField
                        label="Add Tag"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagInputKeyDown}
                        size="small"
                        sx={{ flex: 1 }}
                    />
                    <Button
                        variant="outlined"
                        onClick={handleAddTag}
                        disabled={!tagInput.trim()}
                        sx={{ minWidth: 40 }}
                    >
                        <AddIcon />
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    {tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            onDelete={() => handleDeleteTag(tag)}
                            deleteIcon={<DeleteIcon />}
                        />
                    ))}
                </Box>
                {error && (
                    <Typography color="error" sx={{ mb: 2 }}>
                        {error}
                    </Typography>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                    loading={loading}
                >
                    {loading ? "Creating..." : "Create"}
                </Button>
            </Box>
        </Modal>
    );
}
