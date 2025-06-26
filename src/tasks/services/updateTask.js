export async function updateTask(taskId, updateData, customHeaders = {}) {
    if (!taskId) throw new Error("User ID and Task ID are required to update a task");
    const API_URL = import.meta.env.VITE_API_URL;
    const url = `${API_URL}/api/tasks/${taskId}`;
    const headers = {
        "Content-Type": "application/json",
        ...customHeaders,
    };
    console.log("Apunto de jecutar elfetch")
    const response = await fetch(url, {
        method: "PATCH",
        headers,
        body: JSON.stringify(updateData),
    });

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return response.json();
} 