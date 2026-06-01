"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { BsDot } from "react-icons/bs";
import Image from "next/image";

import KeysImage from "../../../../public/images/landing/image 21.svg";
import BuildingImage from "../../../../public/images/landing/image 23.svg";
import PaperImage from "../../../../public/images/landing/image 15.svg";
import ToolsImage from "../../../../public/images/landing/image 14.svg";
import ManImage from "../../../../public/images/landing/image 25.svg";
import TopRightImageCircle from "../../../../public/images/landing/Ellipse 2521.svg";
import BottomLeftImageCircle from "../../../../public/images/landing/Ellipse 2522.svg";
import { MotionBox, fadeInUp } from "@/components/LANDING/motion/motion";

export default function WhoIsItFor() {
  const items = [
    {
      title: "Landlords",
      description: "Manage your properties from anywhere.",
    },
    {
      title: "Tenants",
      description: "Submit requests and payments easily.",
    },
    {
      title: "Property Management Companies",
      description: "Streamline operations and cut costs.",
    },
    {
      title: "Technicians",
      description:
        "Receive job notifications and connect with landlords directly for repair jobs",
    },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 5, md: 10 }}
      alignItems="center"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        backgroundColor: "#F8F8F8",
        minHeight: { xs: "auto", md: "600px" },
        overflow: "hidden",
      }}
    >
      {/* <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        minHeight: { xs: "auto", md: "600px" },
      }}
    > */}
      {/* Background Circles */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          zIndex: 0,
        }}
      >
        <Image
          src={TopRightImageCircle}
          alt="Top Right Circle"
          layout="responsive"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 200,
          left: 0,
          width: { xs: 150, md: 200 },
          height: { xs: 150, md: 200 },
          zIndex: 0,
        }}
      >
        <Image
          src={BottomLeftImageCircle}
          alt="Bottom Left Circle"
          layout="responsive"
        />
      </Box>

      {/* LEFT SIDE - Image Section */}
      <Grid item size={{ md: 6, xs: 12 }} order={{ xs: 2, md: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            // position: "relative",
          }}
        >
          {/* Man sitting image */}
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Image
                src={ManImage}
                alt="Who is it for"
                width={394}
                height={503}
                layout="responsive"
                priority
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                position: { xs: "", md: "absolute" },
                top: { xs: -20, md: 0 },
                right: { xs: -100, md: -200 },
                zIndex: 2,
              }}
            >
              {[ToolsImage, PaperImage, KeysImage, BuildingImage].map(
                (icon, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      width: { xs: 88, md: 88 },
                      height: { xs: 88, md: 88 },
                      borderRadius: "50%",
                      backgroundColor: "#EBEBEB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: idx !== 0 ? "4px solid #F8F8F8" : "",
                      transform: {
                        xs: `translateX(${idx * -5}px)`,
                        md: `translateX(${idx * -12}px)`,
                      },
                      transition: "all 0.3s ease",
                      zIndex: idx + 1,
                    }}
                  >
                    <Image
                      src={icon}
                      alt={`icon-${idx}`}
                      width={73}
                      height={73}
                    />
                  </Box>
                )
              )}
            </Box>
          </Box>

          {/* Icons row above - positioned relative to the man image */}
        </Box>
      </Grid>
      {/* RIGHT SIDE - Content Section */}
      <Grid item size={{ md: 6, xs: 12 }} order={{ xs: 2, md: 1 }}>
        <Box
          sx={{
            mt: { xs: 4, md: 0 },
            pl: { md: 4 },
            pr: { xs: 2, md: 0 },
            position: "relative",
            zIndex: 1,
            order: { xs: 1, md: 2 },
            textAlign: { xs: "left", md: "left" },
          }}
        >
          <Box sx={{ position: "relative", pl: { xs: 1, md: 2 } }}>
            {/* Custom List Container */}
            <Box sx={{ position: "relative" }}>
              {/* Vertical Line - Fixed positioning */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: "4px", md: "6px" },
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background: "#2372E5",
                  zIndex: 0,
                  borderRadius: "1px",
                }}
              />

              <Typography
                variant="h2"
                fontWeight="700"
                gutterBottom
                sx={{
                  mb: 4,
                  mx: 4,
                  color: "#1976d2",
                }}
              >
                Who is it for?
              </Typography>
              {/* List Items */}
              <Box sx={{ pt: 1 }}>
                {items.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      mb: { xs: 2.5, md: 3 },
                      pl: { xs: 4, md: 5 },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Animated Dot */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: -3, md: -1 },
                        top: { xs: "8px", md: "8px" },
                        width: 16.4,
                        height: 16.4,
                        borderRadius: "50%",
                        backgroundColor: "#1976d2",
                        zIndex: 1,
                      }}
                    />
                    {/* Content */}
                    <Box sx={{ flex: 1, mb: 5 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                          mb: 0.5,
                          fontSize: { xs: "1rem", md: "1.125rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.5,
                          fontSize: { xs: "0.875rem", md: "0.9375rem" },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
