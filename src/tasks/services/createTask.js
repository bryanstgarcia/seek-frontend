export async function createTask({
    title,
    description,
    status,
    tags,
    userId,
}, customHeaders = {}) {
    const API_URL = import.meta.env.VITE_API_URL;
    const headers = {
        "Content-Type": "application/json",
        ...customHeaders,
    };
    const response = await fetch(`${API_URL}/api/tasks`, {
        method: "POST",
        headers,
        body: JSON.stringify({ title, description, status, tags, user_id: userId }),
    });

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    return response.json();
}
