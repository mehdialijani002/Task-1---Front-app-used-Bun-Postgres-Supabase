"use client";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Stack,
  Typography,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie";
import { FaAngleDown } from "react-icons/fa6";
import { MotionBox, scaleIn } from "@/components/LANDING/motion/motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Feature", href: "/feature" },
  // { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact US", href: "/contactus" },
];

export default function PropertyManagerNavbar({}) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("userEmail");
    handleMenuClose();
    window.location.href = "/"; // redirect after logout
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List onClick={toggleDrawer(false)}>
        {navItems.map(({ label, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              onClick={toggleDrawer(false)}
              component={Link}
              href={href}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  color: pathname === href ? "primary" : "textPrimary",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ display: "flex", flexDirection: "column" }}>
          dddd
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#142176",
          borderBottom: "1px solid #eee",
          px: { xs: 1, md: 5 },
          height: { xs: "64px", md: "89px" },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <Link href={"/"}>
              <Image
                src={"/images/landing/bizhome-whitelogo.svg"}
                alt="Logo"
                width={130}
                height={45}
              />
            </Link>
          </Box>

          <MotionBox {...scaleIn} x>
            {/* Right Section */}
            {isMobile ? (
              <>
                <IconButton onClick={toggleDrawer(true)} edge="end">
                  <RxHamburgerMenu color={"#fff"} size={35} />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {drawerContent}
                </Drawer>
              </>
            ) : (
              <Box display="flex" alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  {navItems.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                      <Link key={label} href={href} passHref>
                        <Typography
                          variant="body1"
                          color={"white"}
                          sx={{
                            fontWeight: isActive ? "500" : "400",
                            cursor: "pointer",
                            px: "8px",
                          }}
                        >
                          {label}
                        </Typography>
                      </Link>
                    );
                  })}
                </Stack>

                <>
                  {" "}
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ mx: 2, my: 1, borderColor: "#ddd" }}
                  />
                  {/* Dropdown Menu Button */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Avatar sx={{ width: "41px", height: "41px" }} />
                    <FaAngleDown />
                  </Box>
                </>
              </Box>
            )}
          </MotionBox>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
}
