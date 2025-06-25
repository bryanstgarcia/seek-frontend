import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { TaskCreationModal } from "./TaskCreationModal.jsx";


export function TaskCreation() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
                onClick={handleOpen}
            >
                Create Task
            </Button>
            <TaskCreationModal open={open} handleClose={handleClose} />
        </div>
    );
}
