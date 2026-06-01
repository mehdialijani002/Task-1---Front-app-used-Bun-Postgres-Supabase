"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const DashboardPage = () => {
  const storedUser = Cookies.get("user");
  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    user = null;
  }

  const email = user?.email || Cookies.get("userEmail") || "Guest";

  return (
    <Box sx={{ p: { xs: 3, md: 6 }, minHeight: "100vh", bgcolor: "#f7f9fc" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome back{email ? `, ${email}` : ""}!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 640 }}
        >
          This is your new Supabase-connected dashboard. Use it to verify that
          login and local auth are working correctly, and to access your panel
          actions.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Actions
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Jump to the pages you need most for testing and verifying this
              project.
            </Typography>
            <Button
              component={Link}
              href="/"
              variant="contained"
              sx={{ mr: 1, mb: 1 }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                Cookies.remove("accessToken");
                Cookies.remove("user");
                Cookies.remove("userEmail");
                window.location.href = "/";
              }}
              variant="outlined"
              sx={{ mb: 1 }}
            >
              Log out
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Supabase Ready
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              If you want to inspect the auth users and database directly, open
              your Supabase dashboard or your hosted Supabase project.
            </Typography>
            <Button
              component={Link}
              href="https://app.supabase.com/"
              target="_blank"
              rel="noreferrer"
              variant="contained"
            >
              Open Supabase Console
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Dashboard Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "#eef4ff" }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Active sessions
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    1
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "#eef4ff" }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Local Supabase
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    Connected
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "#eef4ff" }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Project mode
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    Frontend
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
