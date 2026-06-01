"use client";

import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";

import { FiStar, FiLogOut } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";

export const SIDEBAR_WIDTH = 260;

const menuItems = ["Properties", "Dashboard", "Leases", "Repairs", "Finances"];

export default function PropertyManagerSidebar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        width: open ? SIDEBAR_WIDTH : 0,
        backgroundColor: "#F5F7FB",
        py: 2,

        height: "85vh",
        position: "fixed",
        top: 100,
      }}
    >
      {/* Card Container */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          position: "relative",
        }}
      >
        {/* User */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "#F4F5F7",
            border: "1px solid #E0E0E0",
            padding: "8px 12px",
            borderRadius: 3,
            alignItems: "center",
            gap: 0.5,
            mx: 1.5,
            my: 2.5,
          }}
        >
          <Avatar sx={{ width: 41, height: 41 }} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="bodySmall">User@example.com</Typography>
            <Typography variant="bodySmall" color="text.secondary">
              Property Manager
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginLeft: "auto",
            }}
          >
            <IoIosArrowForward color="#2372E5" size={18} />
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Divider sx={{ mx: 2 }} />

          <IconButton
            sx={{
              position: "absolute",
              right: -15, // ⬅️ pushes it outside sidebar
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#F5F7FB",
              border: "1px solid #E0E0E0",
              width: 30,
              height: 30,
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              "&:hover": {
                bgcolor: "#EAEFFF",
              },
            }}
          >
            <MdOutlineArrowBackIosNew size={25} />
          </IconButton>
        </Box>

        {/* Menu */}
        <List sx={{ px: 1 }}>
          {menuItems.map((text) => (
            <ListItemButton
              key={text}
              sx={{
                borderRadius: 2,
                py: 1.4,
                px: 2,
                mb: 0.5,
              }}
            >
              <FiStar size={16} style={{ marginRight: 12 }} />
              <Typography fontSize={14}>{text}</Typography>
            </ListItemButton>
          ))}
        </List>

        {/* Logout */}
        <Box mt="auto" p={2}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<FiLogOut />}
            sx={{ borderRadius: 2 }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
