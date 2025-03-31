import React from "react";

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "8rem", fontWeight: "bold", color: "#333" }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: "#555" }}>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
        Go Back Home
      </Button>
    </Box>
  );
};
export default NotFound;
