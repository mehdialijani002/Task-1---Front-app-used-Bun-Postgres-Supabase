"use client";

import { Box, Grid, Typography } from "@mui/material";
import { MotionBox, fadeInUp } from "@/components/LANDING/motion/motion";
import Icon1 from "@/assets/icons/wallet-money.svg";
import Icon2 from "@/assets/icons/activity.svg";
import Icon3 from "@/assets/icons/layer.svg";
import Icon4 from "@/assets/icons/image.svg";
import Icon5 from "@/assets/icons/color-swatch.svg";
import Image from "next/image";

const features = [
  {
    title: "Rent Payments and Tracking",
    description:
      "Collect rent online and track payments in real time, reducing delays and improving cash flow.",
    icon: <Image src={Icon1} alt="User Icon" width={28} height={29} />, // MUI primary color
  },
  {
    title: "IoT Integration",
    description:
      "Connect smart devices for better security, energy efficiency, and automated property management.",
    icon: <Image src={Icon3} alt="User Icon" width={28} height={29} />,
  },
  {
    title: "Predictive Maintenance",
    description:
      "Prevent issues before they happen with AI-powered predictive maintenance alerts.",
    icon: <Image src={Icon5} alt="User Icon" width={28} height={29} />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Get real-time insights on finances, occupancy, and maintenance to make smarter decisions.",
    icon: <Image src={Icon2} alt="User Icon" width={28} height={29} />,
  },
  {
    title: "Property Review Image Analysis",
    description:
      "Automate property inspections using AI-driven image recognition technology.",
    icon: <Image src={Icon4} alt="User Icon" width={28} height={29} />,
  },
];

export default function KeyFeatures() {
  return (
    <Box sx={{ p: 6, textAlign: "center", backgroundColor: "#f8f8f8" }}>
      <MotionBox {...fadeInUp}>
        <Typography
          variant="h4"
          fontWeight="700"
          gutterBottom
          sx={{
            color: "#252b37",
            fontSize: { xs: "32px", md: "36px" },
            lineHeight: { xs: "48px", md: "48px" },
            letterSpacing: { xs: "0.25px", md: "0px" },
          }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item size={{ md: 4, sm: "6", xs: 12 }} key={index}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  textAlign: "center",
                  transition: "0.3s",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "#e3f2fd", // light blue
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#D9E7FC", // light blue
                    }}
                  >
                    {feature.icon}
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: "#252B37",
                    fontWeight: "500",
                    fontSize: { xs: "18px", md: "18px" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    marginTop: { xs: "8px", md: "12px" },
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </MotionBox>
    </Box>
  );
}
