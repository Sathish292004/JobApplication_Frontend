import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import {
    Box,
    Card,
    Grid,
    Typography,
    TextField,
    InputAdornment,
    Chip,
    Stack,
    IconButton,
} from "@mui/material";

const AllPosts = () => {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate("/edit", { state: { id } });
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/jobPosts/keyword/${query}`
                );
                setPost(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchInitialPosts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/jobPosts"
                );
                setPost(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (query.length === 0) {
            fetchInitialPosts();
        } else if (query.length > 2) {
            fetchPosts();
        }
    }, [query]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:8080/jobPost/${id}`
            );

            setPost(
                post.filter((p) => p.postId !== id)
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(to right,#f8fafc,#e2e8f0)",
                p: 4,
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "#0f172a",
                }}
            >
                Find Your Dream Job
            </Typography>

            <TextField
                fullWidth
                placeholder="Search by keyword..."
                onChange={(e) =>
                    setQuery(e.target.value)
                }
                sx={{
                    mb: 4,
                    background: "#fff",
                    borderRadius: 3,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <Grid container spacing={4}>
                {post.map((p) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        key={p.postId}
                    >
                        <Card
                            sx={{
                                p: 3,
                                borderRadius: 5,
                                height: "100%",
                                boxShadow:
                                    "0 10px 25px rgba(0,0,0,0.08)",
                                transition: "0.3s",
                                "&:hover": {
                                    transform:
                                        "translateY(-8px)",
                                    boxShadow:
                                        "0 20px 40px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                }}
                            >
                                <WorkOutlineIcon
                                    sx={{
                                        mr: 1,
                                        color: "#2563eb",
                                    }}
                                />

                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    {p.postProfile}
                                </Typography>
                            </Box>

                            <Typography
                                sx={{
                                    color: "#475569",
                                    mb: 2,
                                }}
                            >
                                {p.postDesc}
                            </Typography>

                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            >
                                Experience: {p.reqExperience}
                                Years
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                    minHeight: "80px",
                                    alignContent: "flex-start",
                                    mb: 3
                                }}
                            >
                                {p.postTechStack?.map((skill, i) => (
                                    <Chip
                                        key={i}
                                        label={skill}
                                        color="primary"
                                        variant="outlined"
                                    />
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    mt: 2,
                                }}
                            >
                                <IconButton
                                    color="error"
                                    onClick={() =>
                                        handleDelete(p.postId)
                                    }
                                >
                                    <DeleteIcon />
                                </IconButton>

                                <IconButton
                                    color="primary"
                                    onClick={() =>
                                        handleEdit(p.postId)
                                    }
                                >
                                    <EditIcon />
                                </IconButton>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AllPosts;