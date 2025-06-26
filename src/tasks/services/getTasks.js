export async function getTasks(userId, customHeaders = {}) {
    if (!userId) throw new Error("User ID is required to fetch tasks");
    const API_URL = import.meta.env.VITE_API_URL;
    const url = `${API_URL}/api/users/${userId}/tasks`;
    const headers = {
        "Content-Type": "application/json",
        ...customHeaders,
    };
    const response = await fetch(url, {
        method: "GET",
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
} 