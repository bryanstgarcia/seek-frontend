import { useState, useContext } from "react";
import { updateTask } from "../services/updateTask";
import { updateTaskAdapter } from "../adapters/updateTaskAdapter";
import { AuthContext } from "../../authentication/state/AuthContext";

export function useUpdateTask() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { userAuth } = useContext(AuthContext);

    const updateTaskStatus = async (taskId, status) => {
        console.log("Ejecutando el fetch")
        setLoading(true);
        setError(null);
        try {
            const token = userAuth?.token;
            const headers = {
                "Content-Type": "application/json",
            };
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }
            const apiResponse = await updateTask(taskId, { status }, headers);
            return updateTaskAdapter(apiResponse);
        } catch (err) {
            setError(err.message || "Failed to update task");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { updateTaskStatus, loading, error };
} 