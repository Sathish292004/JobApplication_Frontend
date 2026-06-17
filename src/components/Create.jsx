import React, { useState } from "react";
import axios from "axios";
import {
    Typography,
    TextField,
    Button,
    Paper,
    Box,
    InputAdornment,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import DescriptionIcon from "@mui/icons-material/Description";

import { useNavigate } from "react-router-dom";

const initial = {
    postId: "",
    postProfile: "",
    reqExperience: 0,
    postTechStack: [],
    postDesc: "",
};

const Create = () => {
    const skillSet = [
        "JavaScript",
        "Java",
        "Python",
        "Django",
        "Rust",
        "React",
        "Spring",
        "SQL",
    ];

    const navigate = useNavigate();
    const [form, setForm] = useState(initial);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8080/jobPost", form)
            .then((resp) => {
                console.log(resp.data);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const toggleSkill = (skill) => {
        if (form.postTechStack.includes(skill)) {
            setForm({
                ...form,
                postTechStack: form.postTechStack.filter(
                    (s) => s !== skill
                ),
            });
        } else {
            setForm({
                ...form,
                postTechStack: [...form.postTechStack, skill],
            });
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#eff6ff,#dbeafe,#e0f2fe)",
                p: 4,
            }}
        >
            <Paper
                elevation={12}
                sx={{
                    maxWidth: 700,
                    mx: "auto",
                    p: 5,
                    borderRadius: 6,
                    background: "#ffffff",
                    boxShadow:
                        "0 25px 50px rgba(0,0,0,0.12)",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        textAlign: "center",
                        mb: 1,
                        color: "#0f172a",
                    }}
                >
                    Create New Job Post
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        color: "#64748b",
                        mb: 4,
                    }}
                >
                    Publish a new opportunity and attract talented candidates
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Post ID"
                        type="number"
                        sx={{ mb: 3 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BadgeIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={form.postId}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                postId: e.target.value,
                            })
                        }
                    />

                    <TextField
                        fullWidth
                        label="Job Profile"
                        sx={{ mb: 3 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <WorkOutlineIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={form.postProfile}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                postProfile: e.target.value,
                            })
                        }
                    />

                    <TextField
                        fullWidth
                        label="Years of Experience"
                        type="number"
                        sx={{ mb: 3 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <TimelineIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={form.reqExperience}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                reqExperience: Number(e.target.value),
                            })
                        }
                    />

                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        label="Job Description"
                        sx={{ mb: 4 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        alignSelf: "flex-start",
                                        mt: 1,
                                    }}
                                >
                                    <DescriptionIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={form.postDesc}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                postDesc: e.target.value,
                            })
                        }
                    />

                    <TextField
                        fullWidth
                        label="Required Skills"
                        placeholder="Example: Java, Spring Boot, React, SQL"
                        sx={{ mb: 4 }}
                        value={form.postTechStack.join(", ")}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                postTechStack: e.target.value
                                    .split(",")
                                    .map((skill) => skill.trim())
                                    .filter((skill) => skill !== ""),
                            })
                        }
                    />


                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        startIcon={<AddCircleOutlineIcon />}
                        type="submit"
                        sx={{
                            py: 2,
                            borderRadius: 4,
                            fontSize: "17px",
                            fontWeight: 700,
                            textTransform: "none",
                            background:
                                "linear-gradient(90deg,#2563eb,#06b6d4)",
                            transition: "all .3s ease",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                boxShadow:
                                    "0 15px 30px rgba(37,99,235,.35)",
                            },
                        }}
                    >
                        Create Job Post
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Create;