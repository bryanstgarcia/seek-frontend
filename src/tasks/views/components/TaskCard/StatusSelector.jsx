import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useUpdateTask } from "../../../hooks/useUpdateTask";
import { Context as GlobalContext } from "../../../../shared/state/GlobalState";
import { ACTIONS } from "../../../../shared/state/reducer";
import { useGetTasks } from "../../../hooks/useGetTasks";

const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
];

export const StatusSelector = ({ status, taskId }) => {
    const { getTasks } = useGetTasks();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { updateTaskStatus, loading } = useUpdateTask();
    const { dispatch } = React.useContext(GlobalContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleStatusChange = async (newStatus) => {
        if (newStatus === status) return handleClose();
        console.log("Ejecutando el cambio de status ")
        const updatedTask = await updateTaskStatus(taskId, newStatus);
        console.log("Se actualizó")
        if (updatedTask) {
            const newTasks = await getTasks()
            dispatch({ type: ACTIONS.SET_TASKS, payload: newTasks || []});
        }
        handleClose();
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                disabled={loading}
            >
                Change status
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        "aria-labelledby": "basic-button",
                    },
                }}
            >
                {statusOptions.map((option) => (
                    <MenuItem
                        key={option.value}
                        onClick={() => handleStatusChange(option.value)}
                        disabled={status === option.value || loading}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
