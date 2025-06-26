import React, { useContext } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Context as GlobalContext } from "../../../../shared/state/GlobalState";

export const Dashboard = () => {
    const { state } = useContext(GlobalContext);
    const tasks = state.tasks || [];

    const total = tasks.length;
    const pending = tasks.filter((t) => t.status === "pending").length;
    const inProgress = tasks.filter((t) => t.status === "in_progress").length;
    const completed = tasks.filter((t) => t.status === "completed").length;

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} mb={4}>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Tasks</Typography>
                            <Typography variant="h4" color="primary">{total}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Pending</Typography>
                            <Typography variant="h4" color="warning.main">{pending}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">In Progress</Typography>
                            <Typography variant="h4" color="info.main">{inProgress}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Completed</Typography>
                            <Typography variant="h4" color="success.main">{completed}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
