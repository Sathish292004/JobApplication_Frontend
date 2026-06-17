import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar
            position="sticky"
            sx={{
                background: "#0f172a",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
        >
            <Toolbar sx={{ py: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flexGrow: 1,
                    }}
                >
                    <WorkIcon sx={{ color: "#38bdf8" }} />

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            letterSpacing: 1,
                        }}
                    >
                        Job Portal
                    </Typography>
                </Box>

                <Button
                    component={Link}
                    to="/"
                    startIcon={<HomeIcon />}
                    sx={{
                        color: "#fff",
                        mr: 2,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Home
                </Button>

                <Button
                    component={Link}
                    to="/create"
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    sx={{
                        borderRadius: "12px",
                        textTransform: "none",
                        background:
                            "linear-gradient(90deg,#3b82f6,#06b6d4)",
                    }}
                >
                    Add Job
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;