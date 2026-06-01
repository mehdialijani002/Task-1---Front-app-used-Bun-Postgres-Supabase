"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/utils/queryClient";
import theme from "@/lib/theme";
import { AuthProvider } from "@/context/auth/AuthContext";
import { SnackbarProvider } from "@/context/SnackBarContext";

export function Providers({ children }) {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
