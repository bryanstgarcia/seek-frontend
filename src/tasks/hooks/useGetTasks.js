import React, { useState, useContext } from "react";
import { getTasks as getTasksService } from "../services/getTasks";
import { getTasksAdapter } from "../adapters/getTasksAdapter";
import { AuthContext } from "../../authentication/state/AuthContext";
import { Context as GlobalContext } from "../../shared/state/GlobalState";
import { ACTIONS } from "../../shared/state/reducer";

export function useGetTasks({ autoFetch = false, headers = {} } = {}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { userAuth } = useContext(AuthContext);
    const userId = userAuth?.userId;
    const { state, dispatch } = useContext(GlobalContext);

    const getTasks = async (overrideHeaders = {}) => {
        setLoading(true);
        setError(null);
        try {
            const token = userAuth?.token;
            const authHeaders = { ...headers, ...overrideHeaders };
            if (token) {
                authHeaders["Authorization"] = `Bearer ${token}`;
            }
            const apiResponse = await getTasksService(userId, authHeaders);
            const data = getTasksAdapter(apiResponse);
            dispatch({ type: ACTIONS.SET_TASKS, payload: data });
            return data;
        } catch (err) {
            setError(err.message || "Failed to fetch tasks");
            dispatch({ type: ACTIONS.SET_TASKS, payload: [] });
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Optionally fetch tasks on mount
    React.useEffect(() => {
        if (autoFetch) {
            getTasks();
        }
    }, [autoFetch, userId]);

    return { tasks: state.tasks, getTasks, loading, error };
} 