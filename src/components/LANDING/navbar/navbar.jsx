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
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie";
import { IoIosArrowDown } from "react-icons/io";
import { MotionBox, scaleIn } from "@/components/LANDING/motion/motion";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Feature", href: "/feature" },
  // { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact US", href: "/contactus" },
];

export default function Navbar({
  changeBackgroundColor = false,
  showButtons = true,
  showNavbarItems = true,
}) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const token = Cookies.get("accessToken");
  const userEmail = Cookies.get("userEmail");
  const isAuthenticated = Boolean(token);

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
          <Button
            variant="contained"
            component={Link}
            fullWidth
            href="/panel/form-demo"
            sx={{ borderRadius: 2 }}
            onClick={toggleDrawer(false)}
          >
            Book a free demo
          </Button>
          <Button
            variant="outlined"
            fullWidth
            endIcon={<IoIosArrowDown />}
            sx={{ borderRadius: 2, textTransform: "none", mt: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              handleMenuOpen(e);
            }}
          >
            {isAuthenticated ? "Account" : "Log in"}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            disableScrollLock
            disablePortal
            slotProps={{
              paper: {
                sx: {
                  width: "220px",
                  borderRadius: "12px",
                  mt: 1,
                  color: "#142176",
                },
              },
            }}
          >
            {token
              ? [
                  <MenuItem
                    key="profile"
                    component={Link}
                    href="/profile"
                    onClick={handleMenuClose}
                  >
                    Profile
                  </MenuItem>,
                  <MenuItem key="logout" onClick={handleLogout}>
                    Logout
                  </MenuItem>,
                ]
              : [
                  // <MenuItem
                  //   key="tenant"
                  //   component={Link}
                  //   href="/panel/tenant-signin"
                  //   onClick={handleMenuClose}
                  // >
                  //   I’m a Tenant
                  // </MenuItem>,
                  <MenuItem
                    key="technician"
                    component={Link}
                    href="/panel/technician-signin"
                    onClick={handleMenuClose}
                  >
                    I’m a Technician
                  </MenuItem>,
                ]}
          </Menu>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: !changeBackgroundColor ? "#fff" : "#142176",
          borderBottom: "1px solid #eee",
          px: { xs: 1, md: 12 },
          height: { xs: "64px", md: "92px" },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <Link href={"/"}>
              <Image
                src={
                  !changeBackgroundColor
                    ? "/images/landing/bizhome-logo.svg"
                    : "/images/landing/bizhome-whitelogo.svg"
                }
                alt="Logo"
                width={130}
                height={45}
              />
            </Link>
          </Box>
          {showNavbarItems && (
            <MotionBox {...scaleIn}>
              {/* Right Section */}
              {isMobile ? (
                <>
                  <IconButton onClick={toggleDrawer(true)} edge="end">
                    <RxHamburgerMenu
                      color={changeBackgroundColor ? "#fff" : "#000"}
                      size={35}
                    />
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
                            color={
                              changeBackgroundColor
                                ? "white"
                                : isActive
                                  ? "primary"
                                  : "#717680"
                            }
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
                  {showButtons && (
                    <>
                      {" "}
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ mx: 2, borderColor: "#ddd" }}
                      />
                      {/* Dropdown Menu Button */}
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="outlined"
                          endIcon={<IoIosArrowDown />}
                          sx={{ borderRadius: 2, textTransform: "none" }}
                          onClick={handleMenuOpen}
                        >
                          {isAuthenticated ? "Account" : "Log in"}
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          disableScrollLock
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          slotProps={{
                            paper: {
                              sx: {
                                width: "220px",
                                borderRadius: "12px",
                                mt: 1,
                                color: "#142176",
                              },
                            },
                          }}
                        >
                          {token
                            ? [
                                <MenuItem
                                  key="profile"
                                  onClick={handleMenuClose}
                                >
                                  <Link
                                    href="/profile"
                                    style={{
                                      textDecoration: "none",
                                      color: "inherit",
                                    }}
                                  >
                                    Profile
                                  </Link>
                                </MenuItem>,
                                <MenuItem key="logout" onClick={handleLogout}>
                                  Logout
                                </MenuItem>,
                              ]
                            : [
                                // <Link
                                //   href=""
                                //   key="tenant-signin"
                                //   style={{
                                //     textDecoration: "none",
                                //     color: "inherit",
                                //   }}
                                // >
                                //   <MenuItem
                                //     key="login"
                                //     onClick={handleMenuClose}
                                //   >
                                //     I’m a Tenant{" "}
                                //   </MenuItem>
                                // </Link>,
                                <Link
                                  href="/panel/technician-signin"
                                  key="technician-singin"
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  <MenuItem onClick={handleMenuClose}>
                                    I’m a Technician{" "}
                                  </MenuItem>
                                </Link>,
                                // <Link
                                //   href="/panel/property-manager-signin"
                                //   key="property-manager-singin"
                                //   style={{
                                //     textDecoration: "none",
                                //     color: "inherit",
                                //   }}
                                // >
                                //   <MenuItem onClick={handleMenuClose}>
                                //     I’m a Property Manager{" "}
                                //   </MenuItem>
                                // </Link>,
                              ]}
                        </Menu>

                        <Button
                          variant="contained"
                          component={Link}
                          href="/panel/form-demo"
                          sx={{ borderRadius: 2 }}
                        >
                          Book a free demo
                        </Button>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </MotionBox>
          )}
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
}
