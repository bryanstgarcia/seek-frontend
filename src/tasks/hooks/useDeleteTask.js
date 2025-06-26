import { useState, useContext } from "react";
import { deleteTask } from "../services/deleteTask";
import { deleteTaskAdapter } from "../adapters/deleteTaskAdapter";
import { AuthContext } from "../../authentication/state/AuthContext";

export function useDeleteTask() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { userAuth } = useContext(AuthContext);

    const deleteTaskById = async (taskId) => {
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
            const apiResponse = await deleteTask(taskId, headers);
            return deleteTaskAdapter(apiResponse);
        } catch (err) {
            setError(err.message || "Failed to delete task");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { deleteTaskById, loading, error };
} 