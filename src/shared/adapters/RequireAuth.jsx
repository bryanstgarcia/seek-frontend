import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../authentication/state/AuthContext";

export function RequireAuth({ children }) {
    const { userAuth } = useContext(AuthContext);
    if (!userAuth?.token) {
        return <Navigate to="/login" replace />;
    }
    return children;
} 