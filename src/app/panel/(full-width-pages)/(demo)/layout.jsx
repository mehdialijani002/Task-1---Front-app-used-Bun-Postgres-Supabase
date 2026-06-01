"use client";
import { Grid } from "@mui/material";
import React from "react";
import GuestGuard from "@/components/PANEL/auth/guard/GuestGuard";
import LoadingSpinner from "@/components/UI/LoadingSpinner/loadingSpinner";
import Footer from "@/components/LANDING/footer/footer";
import Navbar from "@/components/LANDING/navbar/navbar";

export default function AuthLayout({ children }) {
  return (
    <GuestGuard fallback={<LoadingSpinner />}>
      <Navbar changeBackgroundColor={true} showButtons={false} />
      <Grid container spacing={0}>
        <Grid
          size={{ xs: 12, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 0, md: 5 },
          }}
        >
          {children}
        </Grid>
      </Grid>
      <Footer />
    </GuestGuard>
  );
}
