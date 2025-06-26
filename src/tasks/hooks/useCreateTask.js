import { useState, useContext } from "react";
import { createTask as createTaskService } from "../services/createTask";
import { AuthContext } from "../../authentication/state/AuthContext";

export function useCreateTask() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { userAuth } = useContext(AuthContext);

    const handleCreateTask = async (taskData) => {
        setLoading(true);
        setError(null);
        try {
            const { token } = userAuth || {};
            const payload = taskData;
            const headers = {
                "Content-Type": "application/json",
            };
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const createdTask = await createTaskService(payload, headers);
            return createdTask;
        } catch (err) {
            setError(err.message || "Failed to create task");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { createTask: handleCreateTask, loading, error };
} 