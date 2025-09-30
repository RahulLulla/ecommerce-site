import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "./LoginRegistrationStyles";
import { login } from "@/utils/authentication";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate(-1);
  };

  const goToRegistrationPage = () => navigate("/register");

  return (
    <Box id="login-page" sx={styles.loginBox}>
      <Paper elevation={3} sx={styles.loginPaper}>
        <Typography variant="h5" sx={styles.loginTitle}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
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
            required
            autoComplete={"true"}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={styles.typography}
          onClick={goToRegistrationPage}
        >
          Don&apos;t have an account? Register
        </Typography>
      </Paper>
    </Box>
  );
};
export default LoginPage;
