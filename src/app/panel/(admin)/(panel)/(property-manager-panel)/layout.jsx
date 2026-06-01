"use client";

import React from "react";
import { Box } from "@mui/material";
import PropertyManagerSidebar from "@/components/PANEL/propertyManagerPanel/layout/sidebar";
import PropertyManagerNavbar from "@/components/PANEL/propertyManagerPanel/layout/navbar";
import PropertyManagerAuthGuard from "@/components/PANEL/auth/guard/PropertyManagerAuthGuard";
import LoadingSpinner from "@/components/UI/LoadingSpinner/loadingSpinner";

const NAVBAR_HEIGHT = 92;
const SIDEBAR_WIDTH = 260;

export default function PanelLayout({ children }) {
  return (
    // <PropertyManagerAuthGuard fallback={<LoadingSpinner />}>
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <Box sx={{ height: NAVBAR_HEIGHT, flexShrink: 0 }}>
        <PropertyManagerNavbar />
      </Box>

      {/* Main Row */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: SIDEBAR_WIDTH,
            flexShrink: 0,
            px: 7, // ✅ px WORKS
            py: 3,
            overflowY: "auto",
            backgroundColor: "#F5F7FB",
          }}
        >
          <PropertyManagerSidebar />
        </Box>

        {/* Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            px: 10, // ✅ px WORKS
            py: 5,
            overflowY: "auto",
            backgroundColor: "#F5F7FB",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
    // </PropertyManagerAuthGuard>
  );
}
