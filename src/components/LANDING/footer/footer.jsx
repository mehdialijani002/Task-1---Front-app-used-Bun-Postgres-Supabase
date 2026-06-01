"use client";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Yup validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Email submitted:", data.email);
    reset(); // clear form
  };

  return (
    <Box
      sx={{
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "white",
        mt: 8,
        py: 6,
        px: { xs: 2, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Image
              src="/images/landing/footerLogo.svg"
              alt="Logo"
              width={72}
              height={75}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "32px",
              letterSpacing: "0.15px",
              color: "#666666",
              mt: "32px",
            }}
          >
            Smart Property Management
          </Typography>
          <Box
            display="flex"
            gap={2}
            sx={{
              marginTop: "32px",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
            }}
          >
            <Link href="/aboutus" underline="none" color="gray">
              About Us
            </Link>
            <Link href="/privacy-policy" underline="none" color="gray">
              Privacy & Policy
            </Link>
            {/* <Link href="#" underline="none" color="gray">
              Terms & Condition
            </Link> */}
          </Box>
        </Grid>

        {/* Right Side */}
        {/* <Grid
          item
          size={{ xs: 12, md: 4 }}
          display="flex"
          flexDirection="column"
          sx={{
            marginLeft: { xs: 0, md: "auto" },
            marginTop: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="subtitle2" gutterBottom color="#212121">
            Stay up to date
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="flex-start"
            sx={{ mt: 3 }}
            width={{ xs: "100%", md: "auto" }}
            noValidate
          >
            <TextField
              size="small"
              label="Enter your email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message || " "} // reserve space
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                mr: { xs: 0, md: 2 },
                mb: { xs: 2, md: 0 },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none",
                width: { xs: "100%", md: "auto" },
              }}
            >
              {isMobile ? "Get in touch" : "Subscribe"}
            </Button>
          </Box>
        </Grid> */}
      </Grid>

      {/* Bottom Bar */}
      <Box
        mt={6}
        borderTop="1px solid #e0e0e0"
        pt={3}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" color="textSecondary" mb={{ xs: 2, md: 0 }}>
          © {new Date().getFullYear()} BizHome Solutions. All rights reserved.
        </Typography>
        <Box display="flex" gap={1}>
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              href="https://www.linkedin.com/company/bizhome-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "gray",
                "&:hover": { color: "#0077B5" },
              }}
            >
              <FaLinkedinIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <IconButton
              href="https://www.instagram.com/bizhomesolutions.canada?igsh=MTc1ZzlybmF5dnljag=="
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "gray",
                "&:hover": { color: "#E1306C" },
              }}
            >
              <FaInstagram />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Facebook" arrow>
            <IconButton
              href="#"
              sx={{
                color: "gray",
                "&:hover": { color: "#1877F2" },
              }}
            >
              <FaFacebookF />
            </IconButton>
          </Tooltip> */}
        </Box>
      </Box>
    </Box>
  );
}
