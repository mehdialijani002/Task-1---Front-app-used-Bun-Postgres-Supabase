"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Badge,
} from "@mui/material";
import { FaPlus } from "react-icons/fa6";

export default function ProfileHeader() {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #F8F8F8",
              }}
            >
              <FaPlus size={20} color="#0E965D" />
            </Box>
          }
        >
          <Avatar sx={{ width: 69, height: 69 }} />
        </Badge>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="bodyLarge" color="text.primary2">
            User@example.com
          </Typography>
          <Typography variant="bodyMedium" color="text.secondary">
            Property Manager
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
