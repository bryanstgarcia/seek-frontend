import { useState, useContext } from "react";
import { login } from "../services/login";
import { loginAdapter } from "../adapters/loginAdapter";
import { AuthContext } from "../state/AuthContext";

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { authenticate } = useContext(AuthContext);

    const loginUser = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const apiResponse = await login(email, password);
            const { token, userId } = loginAdapter(apiResponse);
            authenticate({token, userId})
            return { token, userId };
        } catch (err) {
            setError(err.message || "Login failed");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { login: loginUser, loading, error };
}
