export async function deleteTask(taskId, customHeaders = {}) {
    if (!taskId) throw new Error("Task ID is required to delete a task");
    const API_URL = import.meta.env.VITE_API_URL;
    const url = `${API_URL}/api/tasks/${taskId}`;
    const headers = {
        "Content-Type": "application/json",
        ...customHeaders,
    };
    const response = await fetch(url, {
        method: "DELETE",
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }

    return response.json();
} 