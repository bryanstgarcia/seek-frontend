import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { styles } from "./styles";

export function TaskCreationModal({ open, handleClose }) {
    const [taskName, setTaskName] = React.useState("");
    const [taskDescription, setTaskDescription] = React.useState("");
    const [steps, setSteps] = React.useState([""]);

    const handleStepChange = (index, value) => {
        const newSteps = [...steps];
        newSteps[index] = value;
        setSteps(newSteps);
    };

    const handleAddStep = () => {
        if (steps.length < 10) {
            setSteps([...steps, ""]);
        }
    };

    const handleDeleteStep = (index) => {
        if (steps.length > 1) {
            setSteps(steps.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle create logic here
        handleClose();
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
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                    {"Steps (max 10 step)"}
                </Typography>
                {steps.map((step, index) => (
                    <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        sx={{ mb: 1 }}
                    >
                        <TextField
                            label={`Step ${index + 1}`}
                            value={step}
                            onChange={(e) =>
                                handleStepChange(index, e.target.value)
                            }
                            fullWidth
                            disabled={index >= 10}
                        />
                        <IconButton
                            aria-label="delete step"
                            onClick={() => handleDeleteStep(index)}
                            disabled={steps.length === 1}
                            sx={{ ml: 1 }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
                <Box display="flex" alignItems="center" mb={2}>
                    <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={handleAddStep}
                        disabled={steps.length >= 10}
                        sx={{ mr: 2 }}
                    >
                        Add Step
                    </Button>
                    <Typography
                        variant="caption"
                        color={steps.length >= 10 ? "error" : "text.secondary"}
                    >
                        {steps.length}/10 steps
                    </Typography>
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Create
                </Button>
            </Box>
        </Modal>
    );
}
