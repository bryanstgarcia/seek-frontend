import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";


export function Footer() {
    const [value, setValue] = useState(0);
    const ref = useRef(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Archive"
                        icon={<ArchiveIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
