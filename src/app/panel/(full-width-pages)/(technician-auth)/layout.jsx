"use client";

import {
  Box,
  Typography,
  Grid,
  Paper,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import TopRightImage from "../../../../../public/images/panel/sideLoginTopRight.png";
import BottomLeftImage from "../../../../../public/images/panel/sideLoginBottomLeft.png"; // fixed path
import GuestGuard from "@/components/PANEL/auth/guard/GuestGuard";
import LoadingSpinner from "@/components/UI/LoadingSpinner/loadingSpinner";
import Link from "next/link";
export default function AuthLayout({ children }) {
  return (
    <GuestGuard fallback={<LoadingSpinner />}>
      <Grid
        container
        sx={{ minHeight: { xs: "auto", md: "100vh" } }}
        spacing={3}
      >
        {/* Left Panel - Branding */}
        <Grid
          size={{ xs: 12, md: 3.36 }}
          sx={{
            backgroundColor: "#0B054B",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 4,
            position: "relative",
            overflow: "hidden",
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          {/* Top Right Image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: "20%", md: "40%" },
              maxWidth: 200,
            }}
          >
            <Image
              src={TopRightImage}
              alt="Top Right Decoration"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          {/* Bottom Left Image */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: { xs: "20%", md: "40%" },
              maxWidth: 200,
            }}
          >
            <Image
              src={BottomLeftImage}
              alt="Bottom Left Decoration"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          {/* Logo */}
          <Box component={Link} href={"/"} my={{ xs: 2, md: 2 }}>
            <Tooltip title="Go to Home Page" arrow>
              <Image
                src="/images/panel/panelLogo.svg"
                alt="Logo"
                width={199}
                height={171}
                priority
                layout="responsive"
              />
            </Tooltip>
          </Box>
        </Grid>

        {/* Right Panel - Form Placeholder */}
        <Grid
          size={{ xs: 12, md: 8.64 }}
          sx={{
            display: "flex",
            alignItems: { xs: "start", md: "center" },
            justifyContent: "center",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </GuestGuard>
  );
}
