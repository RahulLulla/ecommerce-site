/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "./LoginRegistrationStyles";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Box id="registration-page" sx={styles.loginBox}>
      <Paper elevation={3} sx={styles.loginPaper}>
        <Typography variant="h5" sx={styles.loginTitle}>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label={"Full Name"}
            type={"text"}
            name={"name"}
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
            label={"Email"}
            type={"email"}
            name={"email"}
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
            label={"Password"}
            type={"password"}
            name={"password"}
            fullWidth
            margin="normal"
            onChange={handleChange}
            autoComplete={"true"}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>

        <Typography variant="body2" sx={styles.typography}></Typography>
      </Paper>
    </Box>
  );
};
export default LoginPage;
