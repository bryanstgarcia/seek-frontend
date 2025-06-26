export async function signup(email, password) {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Failed to register");
    }

    return response.json();
}
