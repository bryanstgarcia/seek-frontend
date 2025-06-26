import { useState } from "react";
import { signup } from "../services/signup";
import { registerAdapter } from "../adapters/registerAdapter";

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const register = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const apiResponse = await signup(email, password);
            return registerAdapter(apiResponse);
        } catch (err) {
            setError(err.message || "Registration failed");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error };
} 