"use client";
import { Grid, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { Anek_Odia } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { Rubik } from "next/font/google";
import Link from "next/link";

const anekOdia = Anek_Odia({
  subsets: ["latin"],
  weight: ["600"],
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // minHeight: { xs: "70vh", md: "85vh" },
        backgroundColor: (theme) => theme.palette.secondary.dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        overflow: "hidden",
        opacity: 1,
        px: { xs: 0, md: 7 },
        py: { xs: 2, md: 6 },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/landing/Rectangle.png"
          alt="Bizhome-herosection"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Dark overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.4)",
          }}
        />
      </Box>

      {/* Content */}
      <Grid
        container
        spacing={2}
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, md: 8 },
          color: "white",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          md={6}
          xs={12}
          order={{ xs: 2, md: 1 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              lineHeight: { xs: "35px", md: "94px" },
              fontFamily: anekOdia.style.fontFamily, // ✅ Use Anek Odia font
              fontSize: { xs: "32px", md: "64px" },
              letterSpacing: "4px",
              verticalAlign: "middle",
              mb: { xs: 1, md: 2 },
            }}
          >
            Smart Property Management
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "20px", md: "32px" },
              fontWeight: 700,
              mb: { xs: 0, md: 2 },
              fontFamily: rubik.style.fontFamily, // ✅ Use Anek Odia font
            }}
          >
            for
            <TypeAnimation
              sequence={[
                " Landlords and Tenants",
                4000,
                " Property Managers",
                3000,
                " Technicians",
                2000,
              ]}
              wrapper="span"
              speed={30}
              cursor={true}
              repeat={Infinity}
            />
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "1rem", md: "20px" },
              lineHeight: { xs: "32px", md: "48px" },
              mb: 3,
              letterSpacing: "1px",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Simplifying unit, tenant, and maintenance management with smart,
            predictive tools
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/panel/form-demo"
            color="primary"
            sx={{
              width: { xs: "100%", md: "fit-content" },
              textTransform: "none",
              borderRadius: "12px",
              px: { xs: 0, md: 4 },
              py: 1.5,
            }}
            endIcon={<IoIosArrowForward />}
          >
            Book a Free Demo
          </Button>
        </Grid>

        {/* Right Section (Optional for Future Image/Illustration) */}
        <Grid
          item
          md={6}
          xs={12}
          order={{ xs: 1, md: 2 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
}
