"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import RoleTitle from "@/assets/icons/role-title.svg";
import RoleTenant from "@/assets/icons/role-teanant.svg";
import RoleMechanics from "@/assets/icons/role-mechanics.svg";
export default function RoleComponent() {
  const [selectedRole, setSelectedRole] = useState(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const roles = [
    {
      key: "landlord",
      title: "Landlord",
      description:
        "Manage your properties, units, and tenants all in one place",
      icon: (
        <Image src={RoleTitle} alt="Check your email" width={80} height={80} />
      ),
    },
    {
      key: "tenant",
      title: "Tenant",
      description:
        "View your lease, make payments, and track service requests easily.",
      icon: (
        <Image src={RoleTenant} alt="Check your email" width={80} height={80} />
      ),
    },
    {
      key: "technician",
      title: "Technician",
      description:
        "Stay on top of maintenance tasks and resolve requests efficiently.",
      icon: (
        <Image
          src={RoleMechanics}
          alt="Check your email"
          width={80}
          height={80}
        />
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: "875px", px: { xs: 2, md: 0 } }}>
      <Typography variant={isMdUp ? "h3" : "h5"} fontWeight="bold" gutterBottom>
        Welcome aboard!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={{ xs: 2, md: 4 }}>
        Pick the role that matches how you’ll use the app.
      </Typography>

      <Grid container spacing={2}>
        {roles.map((role) => (
          <Grid size={{ lg: 4, md: 4, sm: 12 }} item key={role.key}>
            <Paper
              onClick={() => setSelectedRole(role.key)}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "row", md: "column" },
                cursor: "pointer",
                textAlign: "center",
                padding: {
                  xs: "12px",
                  md: "24px 20px 24px 20px",
                },
                border:
                  selectedRole === role.key
                    ? "1px solid #1C5BB7"
                    : "1px solid #ffff",
                boxShadow: "0px 1px 6px 1px #0000000D",
                transition: "all 0.4s ease",
                backgroundColor:
                  selectedRole === role.key ? "#0288D10A" : "#fff",
                borderRadius: "12px",
              }}
            >
              <Box mb={0.5}>{role.icon}</Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "start", md: "center" },
                  textAlign: { xs: "start", md: "center" },
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={isMdUp ? "subtitle1" : "subtitle2"}
                  fontWeight="500"
                  gutterBottom
                >
                  {role.title}
                </Typography>
                <Typography
                  variant="body1"
                  color={
                    selectedRole === role.key
                      ? "text.primary"
                      : "text.secondary"
                  }
                >
                  {role.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          mt: { xs: 4, md: 5 }, // Fallback for small screens
          mb: { xs: 4, md: 5 }, // Fallback for small screens
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={!selectedRole}
          sx={{
            boxShadow: 1,

            width: { xs: "100%", md: 153 },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
