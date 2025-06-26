import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProviderComponent } from "./theme.jsx";
import { AuthContextManager } from "../../authentication/state/AuthContext.jsx";
import { GlobalState } from "../state/GlobalState.jsx";

function App() {
    return (
        <>
            <ThemeProviderComponent>
                <CssBaseline />
                <AuthContextManager>
                    <GlobalState>
                        <Navbar />
                        {<Outlet />}
                        {/* <Footer /> */}
                    </GlobalState>
                </AuthContextManager>
            </ThemeProviderComponent>
        </>
    );
}

export default App;
