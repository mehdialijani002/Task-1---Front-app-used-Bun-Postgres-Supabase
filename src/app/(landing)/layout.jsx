import Footer from "@/components/LANDING/footer/footer";
import Navbar from "@/components/LANDING/navbar/navbar";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import GuestGuard from "@/components/PANEL/auth/guard/GuestGuard";
export default function LandingLayout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: "white" }}
    >
      <Navbar />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
